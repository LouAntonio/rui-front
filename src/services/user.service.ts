import api from "./api";

export interface User {
	id: string;
	name: string;
	surname: string;
	email: string;
	role: "ADMIN" | "SELLER";
	status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
	lastLogin: string;
	createdAt: string;
}

export interface UserListParams {
	page?: number;
	limit?: number;
	search?: string;
	status?: string;
	role?: string;
}

export interface UserListResponse {
	success: boolean;
	data: {
		users: User[];
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}

export interface CreateUserRequest {
	name: string;
	surname: string;
	email: string;
	password: string;
	role: "ADMIN" | "SELLER";
}

export interface UpdateUserRequest {
	name?: string;
	surname?: string;
	role?: "ADMIN" | "SELLER";
	status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
}

export const userService = {
	async list(params: UserListParams): Promise<UserListResponse> {
		const response = await api.post("/users/list", params);
		return response.data;
	},

	async getById(
		id: string,
	): Promise<{ success: boolean; data: { user: User } }> {
		const response = await api.get(`/users/${id}`);
		return response.data;
	},

	async create(
		data: CreateUserRequest,
	): Promise<{ success: boolean; data: { user: User } }> {
		const response = await api.post("/users/register", data);
		return response.data;
	},

	async update(
		id: string,
		data: UpdateUserRequest,
	): Promise<{ success: boolean; data: { user: User } }> {
		const response = await api.patch(`/users/${id}`, data);
		return response.data;
	},

	async delete(id: string): Promise<{ success: boolean }> {
		const response = await api.delete(`/users/${id}`);
		return response.data;
	},

	async updateRole(
		userId: string,
		role: "ADMIN" | "SELLER",
	): Promise<{ success: boolean }> {
		const response = await api.patch("/users/update-role", {
			userId,
			role,
		});
		return response.data;
	},

	async toggleStatus(
		userId: string,
		status: "ACTIVE" | "INACTIVE" | "SUSPENDED",
	): Promise<{ success: boolean }> {
		const response = await api.patch("/users/toggle-status", {
			userId,
			status,
		});
		return response.data;
	},
};
