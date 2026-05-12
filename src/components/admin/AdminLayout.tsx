import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Toaster
				position="top-right"
				toastOptions={{
					duration: 3000,
					style: {
						background: "#363636",
						color: "#fff",
					},
					success: {
						iconTheme: {
							primary: "#22c55e",
							secondary: "#fff",
						},
					},
					error: {
						iconTheme: {
							primary: "#ef4444",
							secondary: "#fff",
						},
					},
				}}
			/>
			<Sidebar />
			<div className="ml-60">
				<Header />
				<main className="p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
