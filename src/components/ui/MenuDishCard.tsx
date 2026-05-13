import { Heart, Star } from "lucide-react";
import { type Dish } from "../../services/dish.service";

interface MenuDishCardProps {
	dish: Dish;
	onFavoriteClick?: () => void;
}

export default function MenuDishCard({
	dish,
	onFavoriteClick,
}: MenuDishCardProps) {
	// A API não devolve o rating, usaremos o 5.0 fixo conforme o design (ou nulo se quiser, mas a UI pede 5.0)
	const rating = "5.0";

	return (
		<div className="relative flex flex-col bg-white rounded-[32px] p-[24px] shadow-[0px_14px_40px_-12px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1">
			{/* Botão de Favorito no Canto Superior Direito */}
			<button
				onClick={onFavoriteClick}
				className="absolute top-0 right-0 bg-[#ff0202] rounded-bl-[24px] rounded-tr-[32px] p-[16px] transition-colors hover:bg-red-700 focus:outline-none"
				aria-label="Adicionar aos favoritos"
			>
				<Heart className="w-[20px] h-[20px] text-white fill-white" />
			</button>

			{/* Imagem do Prato */}
			<div className="flex justify-center mt-[10px] mb-[20px]">
				<div className="size-[160px] sm:size-[180px] rounded-full overflow-hidden flex items-center justify-center">
					<img
						src={dish.imageUrl || "/images/placeholder.jpg"} // Placeholder se não houver imagem
						alt={dish.name}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>

			{/* Informações do Prato */}
			<div className="flex flex-col flex-grow">
				<h3 className="text-[18px] font-bold text-black leading-tight">
					{dish.name}
				</h3>
				<p className="mt-[8px] text-[13px] text-[#717171] leading-snug line-clamp-2 min-h-[38px]">
					{dish.description || "Sem descrição disponível."}
				</p>

				<div className="mt-[16px] flex items-center justify-between mt-auto">
					<span className="text-[18px] font-bold text-black">
						{dish.price.toLocaleString("pt-AO", {
							minimumFractionDigits: 3,
						})}{" "}
						kzs
					</span>
					<div className="flex items-center gap-[4px]">
						<Star className="w-[16px] h-[16px] text-[#f0c322] fill-[#f0c322]" />
						<span className="text-[14px] font-semibold text-[#4a4a4a]">
							{rating}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
