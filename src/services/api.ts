import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		const message =
			error.response?.data?.msg || "Ocorreu um erro. Tente novamente.";
		toast.error(message);
		return Promise.reject(error);
	},
);

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("adminToken");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

const subscribeTokenRefresh = (callback: (token: string) => void) => {
	refreshSubscribers.push(callback);
};

const onRefreshComplete = (token: string) => {
	refreshSubscribers.forEach((callback) => callback(token));
	refreshSubscribers = [];
	isRefreshing = false;
};

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			if (
				originalRequest.url?.includes("/users/refresh-token") ||
				originalRequest.url?.includes("/users/admin/login")
			) {
				return Promise.reject(error);
			}

			originalRequest._retry = true;

			if (isRefreshing) {
				return new Promise((resolve) => {
					subscribeTokenRefresh((token: string) => {
						originalRequest.headers.Authorization = `Bearer ${token}`;
						resolve(api(originalRequest));
					});
				});
			}

			isRefreshing = true;

			try {
				const response = await api.post("/users/refresh-token");
				const newToken = response.data.data.accessToken;
				localStorage.setItem("adminToken", newToken);
				onRefreshComplete(newToken);
				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return api(originalRequest);
			} catch (refreshError) {
				onRefreshComplete("");
				localStorage.removeItem("adminToken");
				window.location.href = "/admin/login";
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	},
);

export default api;
