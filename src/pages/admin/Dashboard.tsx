import { Users, Utensils, ChefHat, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { userService } from "../../services/user.service";
import { categoryService } from "../../services/category.service";
import { dishService } from "../../services/dish.service";

export default function Dashboard() {
	const [stats, setStats] = useState({ users: 0, categories: 0, dishes: 0 });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchStats = async () => {
			try {
				const [usersRes, categoriesRes, dishesRes] = await Promise.all([
					userService.list({ limit: 1 }),
					categoryService.list({ limit: 1 }),
					dishService.list({ limit: 1 }),
				]);
				setStats({
					users: usersRes.data.total,
					categories: categoriesRes.data.total,
					dishes: dishesRes.data.total,
				});
			} catch (error) {
				console.error("Error fetching stats:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchStats();
	}, []);

	const cards = [
		{
			label: "Utilizadores",
			value: stats.users,
			icon: Users,
			color: "bg-blue-500",
		},
		{
			label: "Categorias",
			value: stats.categories,
			icon: ChefHat,
			color: "bg-green-500",
		},
		{
			label: "Pratos",
			value: stats.dishes,
			icon: Utensils,
			color: "bg-orange-500",
		},
	];

	if (loading) {
		return <div className="text-gray-500">A carregar...</div>;
	}

	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{cards.map((card) => (
					<div
						key={card.label}
						className="bg-white rounded-lg shadow p-6 flex items-center gap-4"
					>
						<div
							className={`${card.color} p-4 rounded-full text-white`}
						>
							<card.icon size={24} />
						</div>
						<div>
							<p className="text-sm text-gray-500">
								{card.label}
							</p>
							<p className="text-2xl font-bold">{card.value}</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-8 bg-white rounded-lg shadow p-6">
				<div className="flex items-center gap-2 text-gray-600 mb-4">
					<TrendingUp size={20} />
					<span className="font-semibold">
						Bem-vindo ao Backoffice
					</span>
				</div>
				<p className="text-gray-500">
					Use o menu lateral para gerir utilizadores, categorias e
					pratos.
				</p>
			</div>
		</div>
	);
}
