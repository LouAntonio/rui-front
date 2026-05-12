import { useState, useEffect, useCallback } from "react";
import { userService } from "../../services/user.service";
import type {
	User,
	CreateUserRequest,
	UpdateUserRequest,
} from "../../services/user.service";
import Pagination from "../../components/admin/Pagination";
import DeleteModal from "../../components/admin/DeleteModal";
import toast from "react-hot-toast";
import { Search, Plus, Pencil, Trash2, X, Loader2 } from "lucide-react";

export default function Users() {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [limit] = useState(10);
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [roleFilter, setRoleFilter] = useState("");

	const [showModal, setShowModal] = useState(false);
	const [editingUser, setEditingUser] = useState<User | null>(null);
	const [deleteModal, setDeleteModal] = useState<{
		open: boolean;
		user: User | null;
	}>({
		open: false,
		user: null,
	});

	const [formData, setFormData] = useState<CreateUserRequest>({
		name: "",
		surname: "",
		email: "",
		password: "",
		role: "SELLER",
	});

	const [formErrors, setFormErrors] = useState<Record<string, string>>({});
	const [saving, setSaving] = useState(false);

	const fetchUsers = useCallback(async () => {
		setLoading(true);
		try {
			const res = await userService.list({
				page,
				limit,
				search: search || undefined,
				status: statusFilter || undefined,
				role: roleFilter || undefined,
			});
			setUsers(res.data.users);
			setTotal(res.data.total);
		} catch (error) {
			console.error("Error fetching users:", error);
		} finally {
			setLoading(false);
		}
	}, [page, limit, search, statusFilter, roleFilter]);

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (page === 1) {
				fetchUsers();
			} else {
				setPage(1);
			}
		}, 300);
		return () => clearTimeout(debounce);
	}, [fetchUsers, page, search]);

	const validateForm = () => {
		const errors: Record<string, string> = {};
		if (!formData.name.trim()) errors.name = "Nome é obrigatório";
		if (!formData.surname.trim())
			errors.surname = "Sobrenome é obrigatório";
		if (!formData.email.trim()) errors.email = "Email é obrigatório";
		if (!editingUser && !formData.password)
			errors.password = "Password é obrigatória";
		if (formData.password && formData.password.length < 6) {
			errors.password = "Password deve ter pelo menos 6 caracteres";
		}
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setSaving(true);
		try {
			if (editingUser) {
				const updateData: UpdateUserRequest = {
					name: formData.name,
					surname: formData.surname,
					role: formData.role,
				};
				await userService.update(editingUser.id, updateData);
				toast.success("Utilizador atualizado com sucesso");
			} else {
				await userService.create(formData);
				toast.success("Utilizador criado com sucesso");
			}
			setShowModal(false);
			setEditingUser(null);
			setFormData({
				name: "",
				surname: "",
				email: "",
				password: "",
				role: "SELLER",
			});
			fetchUsers();
		} catch (error: unknown) {
			const err = error as { response?: { data?: { msg?: string } } };
			setFormErrors({
				general: err.response?.data?.msg || "Erro ao guardar",
			});
		} finally {
			setSaving(false);
		}
	};

	const handleEdit = (user: User) => {
		setEditingUser(user);
		setFormData({
			name: user.name,
			surname: user.surname,
			email: user.email,
			password: "",
			role: user.role,
		});
		setShowModal(true);
	};

	const handleDelete = async () => {
		if (!deleteModal.user) return;
		try {
			await userService.delete(deleteModal.user.id);
			setDeleteModal({ open: false, user: null });
			toast.success("Utilizador eliminado com sucesso");
			fetchUsers();
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	const handleToggleStatus = async (user: User) => {
		const newStatus = user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
		try {
			await userService.toggleStatus(user.id, newStatus);
			toast.success(
				`Utilizador ${newStatus === "ACTIVE" ? "ativado" : "suspenso"} com sucesso`,
			);
			fetchUsers();
		} catch (error) {
			console.error("Error toggling status:", error);
		}
	};

	const totalPages = Math.ceil(total / limit);

	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Utilizadores</h1>
				<button
					onClick={() => {
						setEditingUser(null);
						setFormData({
							name: "",
							surname: "",
							email: "",
							password: "",
							role: "SELLER",
						});
						setShowModal(true);
					}}
					className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					<Plus size={20} />
					Novo Utilizador
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
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>
					<select
						value={statusFilter}
						onChange={(e) => setStatusFilter(e.target.value)}
						className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">Todos os status</option>
						<option value="ACTIVE">Ativo</option>
						<option value="INACTIVE">Inativo</option>
						<option value="SUSPENDED">Suspenso</option>
					</select>
					<select
						value={roleFilter}
						onChange={(e) => setRoleFilter(e.target.value)}
						className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">Todas as roles</option>
						<option value="ADMIN">Admin</option>
						<option value="SELLER">Seller</option>
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
									Nome
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Email
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Role
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
							{users.map((user) => (
								<tr key={user.id} className="hover:bg-gray-50">
									<td className="px-6 py-4">
										{user.name} {user.surname}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{user.email}
									</td>
									<td className="px-6 py-4">
										<span
											className={`px-2 py-1 text-xs rounded ${
												user.role === "ADMIN"
													? "bg-purple-100 text-purple-700"
													: "bg-gray-100 text-gray-700"
											}`}
										>
											{user.role}
										</span>
									</td>
									<td className="px-6 py-4">
										<button
											onClick={() =>
												handleToggleStatus(user)
											}
											className={`px-2 py-1 text-xs rounded cursor-pointer ${
												user.status === "ACTIVE"
													? "bg-green-100 text-green-700"
													: user.status ===
														  "SUSPENDED"
														? "bg-red-100 text-red-700"
														: "bg-gray-100 text-gray-700"
											}`}
										>
											{user.status}
										</button>
									</td>
									<td className="px-6 py-4 text-right">
										<button
											onClick={() => handleEdit(user)}
											className="text-blue-600 hover:text-blue-800 mr-3"
										>
											<Pencil size={18} />
										</button>
										<button
											onClick={() =>
												setDeleteModal({
													open: true,
													user,
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
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
						<button
							onClick={() => {
								setShowModal(false);
								setEditingUser(null);
								setFormErrors({});
							}}
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
						>
							<X size={20} />
						</button>
						<h2 className="text-xl font-semibold mb-4">
							{editingUser
								? "Editar Utilizador"
								: "Novo Utilizador"}
						</h2>
						{formErrors.general && (
							<div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
								{formErrors.general}
							</div>
						)}
						<form onSubmit={handleSubmit}>
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
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								{formErrors.name && (
									<p className="text-red-500 text-xs mt-1">
										{formErrors.name}
									</p>
								)}
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Sobrenome
								</label>
								<input
									type="text"
									value={formData.surname}
									onChange={(e) =>
										setFormData({
											...formData,
											surname: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								{formErrors.surname && (
									<p className="text-red-500 text-xs mt-1">
										{formErrors.surname}
									</p>
								)}
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Email
								</label>
								<input
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
									disabled={!!editingUser}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
								/>
								{formErrors.email && (
									<p className="text-red-500 text-xs mt-1">
										{formErrors.email}
									</p>
								)}
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium mb-1">
									Password{" "}
									{editingUser && "(deixe vazio para manter)"}
								</label>
								<input
									type="password"
									value={formData.password}
									onChange={(e) =>
										setFormData({
											...formData,
											password: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								{formErrors.password && (
									<p className="text-red-500 text-xs mt-1">
										{formErrors.password}
									</p>
								)}
							</div>
							<div className="mb-6">
								<label className="block text-sm font-medium mb-1">
									Role
								</label>
								<select
									value={formData.role}
									onChange={(e) =>
										setFormData({
											...formData,
											role: e.target.value as
												| "ADMIN"
												| "SELLER",
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									<option value="SELLER">Seller</option>
									<option value="ADMIN">Admin</option>
								</select>
							</div>
							<div className="flex justify-end gap-3">
								<button
									type="button"
									onClick={() => {
										setShowModal(false);
										setEditingUser(null);
									}}
									className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
								>
									Cancelar
								</button>
								<button
									type="submit"
									disabled={saving}
									className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
								>
									{saving && (
										<Loader2
											className="animate-spin"
											size={18}
										/>
									)}
									{saving
										? "A guardar..."
										: editingUser
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
				onClose={() => setDeleteModal({ open: false, user: null })}
				onConfirm={handleDelete}
				title="Eliminar Utilizador"
				message={`Tem a certeza que deseja eliminar o utilizador "${deleteModal.user?.name}"?`}
			/>
		</div>
	);
}
