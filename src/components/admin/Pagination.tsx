import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) return null;

	const pages = [];
	const maxVisible = 5;
	let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
	const end = Math.min(totalPages, start + maxVisible - 1);

	if (end - start < maxVisible - 1) {
		start = Math.max(1, end - maxVisible + 1);
	}

	for (let i = start; i <= end; i++) {
		pages.push(i);
	}

	return (
		<div className="flex items-center gap-2">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<ChevronLeft size={20} />
			</button>
			{start > 1 && (
				<>
					<button
						onClick={() => onPageChange(1)}
						className="px-3 py-1 rounded hover:bg-gray-200"
					>
						1
					</button>
					{start > 2 && <span className="px-2">...</span>}
				</>
			)}
			{pages.map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`px-3 py-1 rounded ${
						page === currentPage
							? "bg-blue-600 text-white"
							: "hover:bg-gray-200"
					}`}
				>
					{page}
				</button>
			))}
			{end < totalPages && (
				<>
					{end < totalPages - 1 && <span className="px-2">...</span>}
					<button
						onClick={() => onPageChange(totalPages)}
						className="px-3 py-1 rounded hover:bg-gray-200"
					>
						{totalPages}
					</button>
				</>
			)}
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<ChevronRight size={20} />
			</button>
		</div>
	);
}
