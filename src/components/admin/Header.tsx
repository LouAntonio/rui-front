import { useAuthStore } from "../../stores/authStore";
import { authService } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LogOut, User } from "lucide-react";

export default function Header() {
	const user = useAuthStore((state) => state.user);
	const logout = useAuthStore((state) => state.logout);
	const navigate = useNavigate();

	const handleLogout = async () => {
		await authService.logout();
		logout();
		toast.success("Logout realizado com sucesso");
		navigate("/admin/login");
	};

	return (
		<header className="bg-white shadow-sm h-16 flex items-center justify-end px-6">
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2 text-gray-700">
					<User size={20} />
					<span className="text-sm font-medium">
						{user?.name} {user?.surname}
					</span>
					<span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
						{user?.role}
					</span>
				</div>
				<button
					onClick={handleLogout}
					className="text-gray-600 hover:text-red-600 transition-colors"
					title="Logout"
				>
					<LogOut size={20} />
				</button>
			</div>
		</header>
	);
}
