import { useState, useEffect, useCallback } from "react";
import { dishService } from "../../services/dish.service";
import type { Dish, CreateDishRequest } from "../../services/dish.service";
import { categoryService } from "../../services/category.service";
import type { Category } from "../../services/category.service";
import Pagination from "../../components/admin/Pagination";
import DeleteModal from "../../components/admin/DeleteModal";
import toast from "react-hot-toast";
import {
	Search,
	Plus,
	Pencil,
	Trash2,
	X,
	Upload,
	Image,
	Loader2,
} from "lucide-react";

const DAYS_OF_WEEK = [
	"MONDAY",
	"TUESDAY",
	"WEDNESDAY",
	"THURSDAY",
	"FRIDAY",
	"SATURDAY",
	"SUNDAY",
];

const DAYS_LABELS: Record<string, string> = {
	MONDAY: "Segunda",
	TUESDAY: "Terça",
	WEDNESDAY: "Quarta",
	THURSDAY: "Quinta",
	FRIDAY: "Sexta",
	SATURDAY: "Sábado",
	SUNDAY: "Domingo",
};

export default function Dishes() {
	const [dishes, setDishes] = useState<Dish[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [limit] = useState(10);
	const [search, setSearch] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("");
	const [statusFilter, setStatusFilter] = useState("");

	const [showModal, setShowModal] = useState(false);
	const [editingDish, setEditingDish] = useState<Dish | null>(null);
	const [deleteModal, setDeleteModal] = useState<{
		open: boolean;
		dish: Dish | null;
	}>({
		open: false,
		dish: null,
	});

	const [formData, setFormData] = useState<CreateDishRequest>({
		name: "",
		description: "",
		price: 0,
		imageUrl: "",
		isActive: true,
		categoryIds: [],
		availableDays: [],
	});

	const [uploading, setUploading] = useState(false);
	const [formErrors, setFormErrors] = useState<Record<string, string>>({});
	const [saving, setSaving] = useState(false);

	const fetchDishes = useCallback(async () => {
		setLoading(true);
		try {
			const res = await dishService.list({
				page,
				limit,
				search: search || undefined,
				categoryId: categoryFilter || undefined,
				isActive:
					statusFilter === "true"
						? true
						: statusFilter === "false"
							? false
							: undefined,
			});
			setDishes(res.data.dishes);
			setTotal(res.data.total);
		} catch (error) {
			console.error("Error fetching dishes:", error);
		} finally {
			setLoading(false);
		}
	}, [page, limit, search, categoryFilter, statusFilter]);

	const fetchCategories = useCallback(async () => {
		try {
			const res = await categoryService.list({ limit: 100 });
			setCategories(res.data.categories);
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	}, []);

	useEffect(() => {
		fetchDishes();
		fetchCategories();
	}, [fetchDishes, fetchCategories]);

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (page === 1) {
				fetchDishes();
			} else {
				setPage(1);
			}
		}, 300);
		return () => clearTimeout(debounce);
	}, [fetchDishes, page, search, categoryFilter, statusFilter]);

	const validateForm = () => {
		const errors: Record<string, string> = {};
		if (!formData.name.trim()) errors.name = "Nome é obrigatório";
		if (!formData.price || formData.price <= 0)
			errors.price = "Preço é obrigatório e deve ser maior que 0";
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setSaving(true);
		try {
			if (editingDish) {
				await dishService.update(editingDish.id, formData);
				toast.success("Prato atualizado com sucesso");
			} else {
				await dishService.create(formData);
				toast.success("Prato criado com sucesso");
			}
			setShowModal(false);
			setEditingDish(null);
			setFormData({
				name: "",
				description: "",
				price: 0,
				imageUrl: "",
				isActive: true,
				categoryIds: [],
				availableDays: [],
			});
			fetchDishes();
		} catch (error: unknown) {
			const err = error as { response?: { data?: { msg?: string } } };
			setFormErrors({
				general: err.response?.data?.msg || "Erro ao guardar",
			});
		} finally {
			setSaving(false);
		}
	};

	const handleImageUpload = async (file: File) => {
		setUploading(true);
		try {
			const res = await dishService.uploadImage(file);
			if (res.success) {
				setFormData({ ...formData, imageUrl: res.data.url });
			}
		} catch (error) {
			console.error("Error uploading image:", error);
			setFormErrors({ image: "Erro ao fazer upload da imagem" });
		} finally {
			setUploading(false);
		}
	};

	const handleEdit = (dish: Dish) => {
		setEditingDish(dish);
		setFormData({
			name: dish.name,
			description: dish.description || "",
			price: Number(dish.price),
			imageUrl: dish.imageUrl || "",
			isActive: dish.isActive,
			categoryIds: dish.categories.map((c) => c.id),
			availableDays: dish.availableDays,
		});
		setFormErrors({});
		setShowModal(true);
	};

	const handleDelete = async () => {
		if (!deleteModal.dish) return;
		try {
			await dishService.delete(deleteModal.dish.id);
			setDeleteModal({ open: false, dish: null });
			toast.success("Prato eliminado com sucesso");
			fetchDishes();
		} catch (error) {
			console.error("Error deleting dish:", error);
		}
	};

	const toggleCategory = (catId: string) => {
		setFormData((prev) => {
			const cats = prev.categoryIds || [];
			return {
				...prev,
				categoryIds: cats.includes(catId)
					? cats.filter((id) => id !== catId)
					: [...cats, catId],
			};
		});
	};

	const toggleDay = (day: string) => {
		setFormData((prev) => {
			const days = prev.availableDays || [];
			return {
				...prev,
				availableDays: days.includes(day)
					? days.filter((d) => d !== day)
					: [...days, day],
			};
		});
	};

	const totalPages = Math.ceil(total / limit);

	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Pratos</h1>
				<button
					onClick={() => {
						setEditingDish(null);
						setFormData({
							name: "",
							description: "",
							price: 0,
							imageUrl: "",
							isActive: true,
							categoryIds: [],
							availableDays: [],
						});
						setFormErrors({});
						setShowModal(true);
					}}
					className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
				>
					<Plus size={20} />
					Novo Prato
				</button>
			</div>

			<div className="bg-white rounded-lg shadow mb-6 p-4">
				<div className="flex flex-wrap gap-4">
					<div className="flex-1 min-w-[200px]">
						<div className="relative">
							<Search
								className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
								size={20}
							/>
							<input
								type="text"
								placeholder="Pesquisar..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
						</div>
					</div>
					<select
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
						className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
					>
						<option value="">Todas as categorias</option>
						{categories.map((cat) => (
							<option key={cat.id} value={cat.id}>
								{cat.name}
							</option>
						))}
					</select>
					<select
						value={statusFilter}
						onChange={(e) => setStatusFilter(e.target.value)}
						className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
					>
						<option value="">Todos os status</option>
						<option value="true">Ativo</option>
						<option value="false">Inativo</option>
					</select>
				</div>
			</div>

			<div className="bg-white rounded-lg shadow overflow-hidden">
				{loading ? (
					<div className="p-8 text-center text-gray-500">
						A carregar...
					</div>
				) : (
					<table className="w-full">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Imagem
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Nome
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Preço
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Categorias
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Status
								</th>
								<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
									Ações
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							{dishes.map((dish) => (
								<tr key={dish.id} className="hover:bg-gray-50">
									<td className="px-6 py-4">
										{dish.imageUrl ? (
											<img
												src={dish.imageUrl}
												alt={dish.name}
												className="w-16 h-16 object-cover rounded"
											/>
										) : (
											<div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
												<Image
													size={24}
													className="text-gray-400"
												/>
											</div>
										)}
									</td>
									<td className="px-6 py-4 font-medium">
										{dish.name}
									</td>
									<td className="px-6 py-4">
										{Number(dish.price).toFixed(2)} Kz
									</td>
									<td className="px-6 py-4">
										<div className="flex flex-wrap gap-1">
											{dish.categories.map((cat) => (
												<span
													key={cat.id}
													className="px-2 py-0.5 text-xs bg-gray-100 rounded"
												>
													{cat.name}
												</span>
											))}
										</div>
									</td>
									<td className="px-6 py-4">
										<span
											className={`px-2 py-1 text-xs rounded ${
												dish.isActive
													? "bg-green-100 text-green-700"
													: "bg-gray-100 text-gray-700"
											}`}
										>
											{dish.isActive
												? "Ativo"
												: "Inativo"}
										</span>
									</td>
									<td className="px-6 py-4 text-right">
										<button
											onClick={() => handleEdit(dish)}
											className="text-blue-600 hover:text-blue-800 mr-3"
										>
											<Pencil size={18} />
										</button>
										<button
											onClick={() =>
												setDeleteModal({
													open: true,
													dish,
												})
											}
											className="text-red-600 hover:text-red-800"
										>
											<Trash2 size={18} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>

			{totalPages > 1 && (
				<div className="mt-4 flex justify-center">
					<Pagination
						currentPage={page}
						totalPages={totalPages}
						onPageChange={setPage}
					/>
				</div>
			)}

			{showModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
					<div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative my-8 mx-4">
						<button
							onClick={() => {
								setShowModal(false);
								setEditingDish(null);
							}}
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
						>
							<X size={20} />
						</button>
						<h2 className="text-xl font-semibold mb-4">
							{editingDish ? "Editar Prato" : "Novo Prato"}
						</h2>
						{formErrors.general && (
							<div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
								{formErrors.general}
							</div>
						)}
						<form
							onSubmit={handleSubmit}
							className="max-h-[70vh] overflow-y-auto pr-2"
						>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Nome
								</label>
								<input
									type="text"
									value={formData.name}
									onChange={(e) =>
										setFormData({
											...formData,
											name: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
								/>
								{formErrors.name && (
									<p className="text-red-500 text-xs mt-1">
										{formErrors.name}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Descrição
								</label>
								<textarea
									value={formData.description}
									onChange={(e) =>
										setFormData({
											...formData,
											description: e.target.value,
										})
									}
									rows={3}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
								/>
							</div>

							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Preço (Kz)
								</label>
								<input
									type="number"
									step="0.01"
									min="0"
									value={formData.price || ""}
									onChange={(e) =>
										setFormData({
											...formData,
											price:
												parseFloat(e.target.value) || 0,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
								/>
								{formErrors.price && (
									<p className="text-red-500 text-xs mt-1">
										{formErrors.price}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Imagem
								</label>
								<div className="flex items-center gap-4">
									{formData.imageUrl ? (
										<div className="relative">
											<img
												src={formData.imageUrl}
												alt="Preview"
												className="w-24 h-24 object-cover rounded"
											/>
											<button
												type="button"
												onClick={() =>
													setFormData({
														...formData,
														imageUrl: "",
													})
												}
												className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
											>
												<X size={14} />
											</button>
										</div>
									) : (
										<label className="border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-orange-500 flex items-center gap-2">
											{uploading ? (
												<Loader2
													className="animate-spin"
													size={24}
												/>
											) : (
												<Upload
													size={24}
													className="text-gray-400"
												/>
											)}
											<span className="text-sm text-gray-500">
												{uploading
													? "A carregar..."
													: "Carregar imagem"}
											</span>
											<input
												type="file"
												accept="image/*"
												className="hidden"
												onChange={(e) => {
													const file =
														e.target.files?.[0];
													if (file)
														handleImageUpload(file);
												}}
												disabled={uploading}
											/>
										</label>
									)}
								</div>
								{formErrors.image && (
									<p className="text-red-500 text-xs mt-1">
										{formErrors.image}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label className="block text-sm font-medium mb-2">
									Categorias
								</label>
								<div className="flex flex-wrap gap-2">
									{categories.map((cat) => (
										<button
											key={cat.id}
											type="button"
											onClick={() =>
												toggleCategory(cat.id)
											}
											className={`px-3 py-1 rounded text-sm ${
												(
													formData.categoryIds || []
												).includes(cat.id)
													? "bg-orange-600 text-white"
													: "bg-gray-100 text-gray-700 hover:bg-gray-200"
											}`}
										>
											{cat.name}
										</button>
									))}
								</div>
							</div>

							<div className="mb-4">
								<label className="block text-sm font-medium mb-2">
									Dias Disponíveis
								</label>
								<div className="flex flex-wrap gap-2">
									{DAYS_OF_WEEK.map((day) => (
										<button
											key={day}
											type="button"
											onClick={() => toggleDay(day)}
											className={`px-3 py-1 rounded text-sm ${
												(
													formData.availableDays || []
												).includes(day)
													? "bg-orange-600 text-white"
													: "bg-gray-100 text-gray-700 hover:bg-gray-200"
											}`}
										>
											{DAYS_LABELS[day]}
										</button>
									))}
								</div>
							</div>

							<div className="mb-6">
								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="checkbox"
										checked={formData.isActive}
										onChange={(e) =>
											setFormData({
												...formData,
												isActive: e.target.checked,
											})
										}
										className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
									/>
									<span className="text-sm font-medium">
										Prato ativo
									</span>
								</label>
							</div>

							<div className="flex justify-end gap-3">
								<button
									type="button"
									onClick={() => {
										setShowModal(false);
										setEditingDish(null);
									}}
									className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
								>
									Cancelar
								</button>
								<button
									type="submit"
									disabled={saving}
									className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-50"
								>
									{saving
										? "A guardar..."
										: editingDish
											? "Guardar"
											: "Criar"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			<DeleteModal
				isOpen={deleteModal.open}
				onClose={() => setDeleteModal({ open: false, dish: null })}
				onConfirm={handleDelete}
				title="Eliminar Prato"
				message={`Tem a certeza que deseja eliminar o prato "${deleteModal.dish?.name}"?`}
			/>
		</div>
	);
}
