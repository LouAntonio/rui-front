import { X } from "lucide-react";

interface DeleteModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
	message: string;
	loading?: boolean;
}

export default function DeleteModal({
	isOpen,
	onClose,
	onConfirm,
	title,
	message,
	loading,
}: DeleteModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
				>
					<X size={20} />
				</button>
				<h2 className="text-xl font-semibold mb-4">{title}</h2>
				<p className="text-gray-600 mb-6">{message}</p>
				<div className="flex justify-end gap-3">
					<button
						onClick={onClose}
						className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
						disabled={loading}
					>
						Cancelar
					</button>
					<button
						onClick={onConfirm}
						className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
						disabled={loading}
					>
						{loading ? "A eliminar..." : "Eliminar"}
					</button>
				</div>
			</div>
		</div>
	);
}
