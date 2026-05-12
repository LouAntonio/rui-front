import { useState, useEffect, useCallback } from "react";
import { categoryService } from "../../services/category.service";
import type { Category } from "../../services/category.service";
import DeleteModal from "../../components/admin/DeleteModal";
import toast from "react-hot-toast";
import { Search, Plus, Pencil, Trash2, X, ChefHat } from "lucide-react";

export default function Categories() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");

	const [showModal, setShowModal] = useState(false);
	const [editingCategory, setEditingCategory] = useState<Category | null>(
		null,
	);
	const [deleteModal, setDeleteModal] = useState<{
		open: boolean;
		category: Category | null;
	}>({
		open: false,
		category: null,
	});

	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const [saving, setSaving] = useState(false);

	const fetchCategories = useCallback(async () => {
		setLoading(true);
		try {
			const res = await categoryService.list({
				search: search || undefined,
			});
			setCategories(res.data.categories);
		} catch (error) {
			console.error("Error fetching categories:", error);
		} finally {
			setLoading(false);
		}
	}, [search]);

	useEffect(() => {
		const debounce = setTimeout(() => {
			fetchCategories();
		}, 300);
		return () => clearTimeout(debounce);
	}, [fetchCategories]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) {
			setError("Nome é obrigatório");
			return;
		}

		setSaving(true);
		setError("");

		try {
			if (editingCategory) {
				await categoryService.update(editingCategory.id, { name });
				toast.success("Categoria atualizada com sucesso");
			} else {
				await categoryService.create({ name });
				toast.success("Categoria criada com sucesso");
			}
			setShowModal(false);
			setEditingCategory(null);
			setName("");
			fetchCategories();
		} catch (err: unknown) {
			const e = err as { response?: { data?: { msg?: string } } };
			setError(e.response?.data?.msg || "Erro ao guardar");
		} finally {
			setSaving(false);
		}
	};

	const handleEdit = (category: Category) => {
		setEditingCategory(category);
		setName(category.name);
		setError("");
		setShowModal(true);
	};

	const handleDelete = async () => {
		if (!deleteModal.category) return;
		try {
			await categoryService.delete(deleteModal.category.id);
			setDeleteModal({ open: false, category: null });
			toast.success("Categoria eliminada com sucesso");
			fetchCategories();
		} catch (error) {
			console.error("Error deleting category:", error);
		}
	};

	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Categorias</h1>
				<button
					onClick={() => {
						setEditingCategory(null);
						setName("");
						setError("");
						setShowModal(true);
					}}
					className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
				>
					<Plus size={20} />
					Nova Categoria
				</button>
			</div>

			<div className="bg-white rounded-lg shadow mb-6 p-4">
				<div className="relative max-w-md">
					<Search
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="text"
						placeholder="Pesquisar categorias..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
			</div>

			<div className="bg-white rounded-lg shadow overflow-hidden">
				{loading ? (
					<div className="p-8 text-center text-gray-500">
						A carregar...
					</div>
				) : categories.length === 0 ? (
					<div className="p-8 text-center text-gray-500">
						<ChefHat
							size={48}
							className="mx-auto mb-4 text-gray-300"
						/>
						<p>Nenhuma categoria encontrada</p>
					</div>
				) : (
					<table className="w-full">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Nome
								</th>
								<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
									Ações
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							{categories.map((category) => (
								<tr
									key={category.id}
									className="hover:bg-gray-50"
								>
									<td className="px-6 py-4 font-medium">
										{category.name}
									</td>
									<td className="px-6 py-4 text-right">
										<button
											onClick={() => handleEdit(category)}
											className="text-blue-600 hover:text-blue-800 mr-3"
										>
											<Pencil size={18} />
										</button>
										<button
											onClick={() =>
												setDeleteModal({
													open: true,
													category,
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

			{showModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
						<button
							onClick={() => {
								setShowModal(false);
								setEditingCategory(null);
							}}
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
						>
							<X size={20} />
						</button>
						<h2 className="text-xl font-semibold mb-4">
							{editingCategory
								? "Editar Categoria"
								: "Nova Categoria"}
						</h2>
						{error && (
							<div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
								{error}
							</div>
						)}
						<form onSubmit={handleSubmit}>
							<div className="mb-6">
								<label className="block text-sm font-medium mb-1">
									Nome
								</label>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
									placeholder="Ex: Peixes, Carnes, Vegetariano..."
								/>
							</div>
							<div className="flex justify-end gap-3">
								<button
									type="button"
									onClick={() => {
										setShowModal(false);
										setEditingCategory(null);
									}}
									className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
								>
									Cancelar
								</button>
								<button
									type="submit"
									disabled={saving}
									className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
								>
									{saving
										? "A guardar..."
										: editingCategory
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
				onClose={() => setDeleteModal({ open: false, category: null })}
				onConfirm={handleDelete}
				title="Eliminar Categoria"
				message={`Tem a certeza que deseja eliminar a categoria "${deleteModal.category?.name}"?`}
			/>
		</div>
	);
}
