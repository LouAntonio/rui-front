import { create } from "zustand";

interface User {
	id: string;
	name: string;
	surname: string;
	email: string;
	role: "ADMIN" | "SELLER";
	status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
}

interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	setUser: (user: User | null) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	isAuthenticated: !!localStorage.getItem("adminToken"),
	setUser: (user) => set({ user, isAuthenticated: !!user }),
	logout: () => {
		localStorage.removeItem("adminToken");
		set({ user: null, isAuthenticated: false });
	},
}));
