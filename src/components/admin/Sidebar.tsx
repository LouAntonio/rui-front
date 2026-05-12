import { NavLink } from "react-router-dom";
import {
	LayoutDashboard,
	Users,
	Utensils,
	ChefHat,
	LogOut,
} from "lucide-react";
import { useAuthStore } from "../../stores/authStore";
import { authService } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
	const logout = useAuthStore((state) => state.logout);
	const navigate = useNavigate();

	const handleLogout = async () => {
		await authService.logout();
		logout();
		navigate("/admin/login");
	};

	const navItems = [
		{ to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
		{ to: "/admin/users", icon: Users, label: "Utilizadores" },
		{ to: "/admin/categories", icon: ChefHat, label: "Categorias" },
		{ to: "/admin/dishes", icon: Utensils, label: "Pratos" },
	];

	return (
		<aside className="w-60 bg-gray-900 text-white min-h-screen fixed left-0 top-0 flex flex-col">
			<div className="p-4 border-b border-gray-800">
				<h1 className="text-xl font-bold">Admin</h1>
			</div>
			<nav className="flex-1 py-4">
				{navItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						end={item.end}
						className={({ isActive }) =>
							`flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors ${
								isActive
									? "bg-gray-800 border-l-4 border-blue-500"
									: ""
							}`
						}
					>
						<item.icon size={20} />
						<span>{item.label}</span>
					</NavLink>
				))}
			</nav>
			<div className="p-4 border-t border-gray-800">
				<button
					onClick={handleLogout}
					className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-800 rounded transition-colors text-red-400"
				>
					<LogOut size={20} />
					<span>Logout</span>
				</button>
			</div>
		</aside>
	);
}
