import { useState, useRef, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";
import { useAuthStore } from "../../stores/authStore";
import toast from "react-hot-toast";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function Login() {
	const navigate = useNavigate();
	const setUser = useAuthStore((state) => state.setUser);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const submitRef = useRef(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (submitRef.current || loading) return;
		submitRef.current = true;

		setError("");
		setLoading(true);

		try {
			const response = await authService.login({ email, password });
			if (response.success && response.data?.user) {
				setUser({
					id: response.data.user.id,
					name: response.data.user.name,
					surname: response.data.user.surname,
					email: response.data.user.email,
					role: response.data.user.role as "ADMIN" | "SELLER",
					status: "ACTIVE",
				});
				toast.success("Login realizado com sucesso");
				navigate("/admin");
			} else {
				setError(response.msg || "Credenciais inválidas");
			}
		} catch (err: unknown) {
			const axiosError = err as {
				response?: { data?: { msg?: string } };
			};
			setError(axiosError.response?.data?.msg || "Credenciais inválidas");
		} finally {
			setLoading(false);
			submitRef.current = false;
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold text-center mb-6">
					Admin Login
				</h1>
				{error && (
					<div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
						{error}
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-medium mb-1">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-medium mb-1">
							Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
							>
								{showPassword ? (
									<EyeOff size={20} />
								) : (
									<Eye size={20} />
								)}
							</button>
						</div>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
					>
						{loading && (
							<Loader2 className="animate-spin" size={20} />
						)}
						{loading ? "A entrar..." : "Entrar"}
					</button>
				</form>
			</div>
		</div>
	);
}
