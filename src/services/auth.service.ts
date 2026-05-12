import axios from "axios";
import api from "./api";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	success: boolean;
	data?: {
		user: {
			id: string;
			name: string;
			surname: string;
			email: string;
			role: string;
		};
		accessToken: string;
	};
	msg?: string;
}

export const authService = {
	async login(
		data: LoginRequest,
		signal?: AbortSignal,
	): Promise<LoginResponse> {
		const response = await api.post("/users/admin/login", data, { signal });
		if (response.data.success && response.data.data?.accessToken) {
			localStorage.setItem("adminToken", response.data.data.accessToken);
		}
		return response.data;
	},

	async logout(): Promise<void> {
		const token = localStorage.getItem("adminToken");
		try {
			await axios.post(
				`${API_URL}/users/logout`,
				{},
				{
					withCredentials: true,
					headers: token ? { Authorization: `Bearer ${token}` } : {},
				},
			);
		} catch {
			// Ignorar erros no logout
		} finally {
			localStorage.removeItem("adminToken");
		}
	},

	async isLoggedIn(): Promise<boolean> {
		const token = localStorage.getItem("adminToken");
		if (!token) return false;

		try {
			const response = await api.get("/users/admin/is-logged-in");
			return response.data.success === true;
		} catch {
			return false;
		}
	},

	async getCurrentUser() {
		const response = await api.get("/users/admin/is-logged-in");
		return response.data.data?.user || null;
	},
};
