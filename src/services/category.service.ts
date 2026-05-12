import api from "./api";

export interface Category {
	id: string;
	name: string;
}

export interface CategoryListParams {
	page?: number;
	limit?: number;
	search?: string;
}

export interface CategoryListResponse {
	success: boolean;
	data: {
		categories: Category[];
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}

export interface CreateCategoryRequest {
	name: string;
}

export const categoryService = {
	async list(params: CategoryListParams = {}): Promise<CategoryListResponse> {
		const response = await api.get("/categories", { params });
		return response.data;
	},

	async getById(
		id: string,
	): Promise<{ success: boolean; data: { category: Category } }> {
		const response = await api.get(`/categories/${id}`);
		return response.data;
	},

	async create(
		data: CreateCategoryRequest,
	): Promise<{ success: boolean; data: { category: Category } }> {
		const response = await api.post("/categories", data);
		return response.data;
	},

	async update(
		id: string,
		data: Partial<CreateCategoryRequest>,
	): Promise<{ success: boolean; data: { category: Category } }> {
		const response = await api.patch(`/categories/${id}`, data);
		return response.data;
	},

	async delete(id: string): Promise<{ success: boolean }> {
		const response = await api.delete(`/categories/${id}`);
		return response.data;
	},
};
