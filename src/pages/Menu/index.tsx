import { useState, useEffect, useRef } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/layout/Hero";
import Container from "../../components/layout/Container";
import MenuDishCard from "../../components/ui/MenuDishCard";
import {
	categoryService,
	type Category,
} from "../../services/category.service";
import { dishService, type Dish } from "../../services/dish.service";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Menu() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [dishes, setDishes] = useState<Dish[]>([]);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [loadingDishes, setLoadingDishes] = useState(false);

	const categoriesScrollRef = useRef<HTMLDivElement>(null);

	// Fetch categories on mount
	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await categoryService.list({ limit: 50 });
				setCategories(response.data.categories);
			} catch (error) {
				console.error("Failed to fetch categories:", error);
			}
		}
		fetchCategories();
	}, []);

	// Fetch dishes when activeCategory changes
	useEffect(() => {
		async function fetchDishes() {
			setLoadingDishes(true);
			try {
				const response = await dishService.list({
					categoryId: activeCategory || undefined,
					limit: 50, // fetch a good amount for the menu
				});
				setDishes(response.data.dishes);
			} catch (error) {
				console.error("Failed to fetch dishes:", error);
			} finally {
				setLoadingDishes(false);
			}
		}
		fetchDishes();
	}, [activeCategory]);

	const scrollCategories = (direction: "left" | "right") => {
		if (categoriesScrollRef.current) {
			const scrollAmount = 200;
			categoriesScrollRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const activeCategoryName = activeCategory
		? categories.find((c) => c.id === activeCategory)?.name
		: "Todos os dias";

	return (
		<div className="bg-[#fcfcfc] min-h-screen flex flex-col">
			<Header />

			<main className="flex-grow">
				<Hero />

				<section className="pt-[60px] pb-[100px]">
					<Container>
						{/* Cabeçalho da Secção de Menu */}
						<div className="flex flex-col gap-[8px] mb-[32px]">
							<h3 className="text-[12px] font-bold text-[#4585ff] tracking-widest uppercase underline decoration-2 underline-offset-4">
								CARDÁPIO DIGITAL
							</h3>
							<h2 className="text-[32px] sm:text-[40px] font-extrabold text-black uppercase">
								MENU DE HOJE
							</h2>
						</div>

						{/* Filtros de Categorias */}
						<div className="flex items-center justify-between gap-[20px] mb-[40px]">
							<div
								ref={categoriesScrollRef}
								className="flex items-center gap-[16px] overflow-x-auto no-scrollbar pb-2"
								style={{
									scrollbarWidth: "none",
									msOverflowStyle: "none",
								}}
							>
								{/* Botão Todos */}
								<button
									onClick={() => setActiveCategory(null)}
									className={`shrink-0 px-[32px] py-[12px] rounded-full font-bold text-[16px] transition-colors ${
										activeCategory === null
											? "bg-[#ff0202] text-white"
											: "bg-[#f0c322] text-white hover:bg-[#e0b51f]"
									}`}
								>
									Todos
								</button>

								{/* Botões das Categorias */}
								{categories.map((category) => (
									<button
										key={category.id}
										onClick={() =>
											setActiveCategory(category.id)
										}
										className={`shrink-0 px-[32px] py-[12px] rounded-full font-bold text-[16px] transition-colors ${
											activeCategory === category.id
												? "bg-[#ff0202] text-white"
												: "bg-[#f0c322] text-white hover:bg-[#e0b51f]"
										}`}
									>
										{category.name}
									</button>
								))}
							</div>

							{/* Setas de Scroll Horizontal */}
							<div className="hidden sm:flex items-center gap-[12px] shrink-0">
								<button
									onClick={() => scrollCategories("left")}
									className="size-[40px] rounded-full bg-[#f2f2f2] flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
									aria-label="Scroll categorias esquerda"
								>
									<ChevronLeft className="w-[20px] h-[20px]" />
								</button>
								<button
									onClick={() => scrollCategories("right")}
									className="size-[40px] rounded-full bg-[#ff0202] flex items-center justify-center text-white hover:bg-red-700 transition-colors"
									aria-label="Scroll categorias direita"
								>
									<ChevronRight className="w-[20px] h-[20px]" />
								</button>
							</div>
						</div>

						{/* Subtítulo dinâmico da categoria */}
						<div className="flex items-center justify-between mb-[32px]">
							<h3 className="text-[20px] sm:text-[24px] font-bold text-[#ff0202]">
								{activeCategory === null
									? "Todos os dias"
									: activeCategoryName}
							</h3>
							{activeCategory !== null && (
								<h3 className="text-[20px] sm:text-[24px] font-bold text-[#f0c322]">
									{activeCategoryName}
								</h3>
							)}
						</div>

						{/* Grelha de Pratos */}
						{loadingDishes ? (
							<div className="flex justify-center items-center py-20">
								<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff0202]"></div>
							</div>
						) : dishes.length > 0 ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] sm:gap-[32px]">
								{dishes.map((dish) => (
									<MenuDishCard
										key={dish.id}
										dish={dish}
										onFavoriteClick={() =>
											console.log(
												`Favoritou ${dish.name}`,
											)
										}
									/>
								))}
							</div>
						) : (
							<div className="text-center py-20 text-gray-500 text-lg">
								Não existem pratos disponíveis nesta categoria.
							</div>
						)}
					</Container>
				</section>
			</main>

			<Footer />
		</div>
	);
}
