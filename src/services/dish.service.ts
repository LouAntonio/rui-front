import api from "./api";

export interface Dish {
	id: string;
	name: string;
	description: string | null;
	price: number;
	imageUrl: string | null;
	isActive: boolean;
	categories: { id: string; name: string }[];
	availableDays: string[];
	createdAt: string;
	updatedAt: string;
}

export interface DishListParams {
	page?: number;
	limit?: number;
	search?: string;
	categoryId?: string;
	isActive?: boolean;
}

export interface DishListResponse {
	success: boolean;
	data: {
		dishes: Dish[];
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}

export interface CreateDishRequest {
	name: string;
	description?: string;
	price: number;
	imageUrl?: string;
	isActive?: boolean;
	categoryIds?: string[];
	availableDays?: string[];
}

export const dishService = {
	async list(params: DishListParams = {}): Promise<DishListResponse> {
		const response = await api.get("/dishes", { params });
		return response.data;
	},

	async getById(
		id: string,
	): Promise<{ success: boolean; data: { dish: Dish } }> {
		const response = await api.get(`/dishes/${id}`);
		return response.data;
	},

	async create(
		data: CreateDishRequest,
	): Promise<{ success: boolean; data: { dish: Dish } }> {
		const response = await api.post("/dishes", data);
		return response.data;
	},

	async update(
		id: string,
		data: Partial<CreateDishRequest>,
	): Promise<{ success: boolean; data: { dish: Dish } }> {
		const response = await api.patch(`/dishes/${id}`, data);
		return response.data;
	},

	async delete(id: string): Promise<{ success: boolean }> {
		const response = await api.delete(`/dishes/${id}`);
		return response.data;
	},

	async uploadImage(
		file: File,
	): Promise<{ success: boolean; data: { url: string } }> {
		const formData = new FormData();
		formData.append("image", file);
		const response = await api.post("/dishes/upload-image", formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		return response.data;
	},
};
