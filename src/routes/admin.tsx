import { createBrowserRouter, redirect } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Categories from "../pages/admin/Categories";
import Dishes from "../pages/admin/Dishes";

const adminRouter = createBrowserRouter([
	{
		path: "/admin/login",
		loader: () => {
			const token = localStorage.getItem("adminToken");
			if (token) {
				return redirect("/admin");
			}
			return null;
		},
		element: <Login />,
	},
	{
		path: "/admin",
		element: (
			<ProtectedRoute>
				<AdminLayout />
			</ProtectedRoute>
		),
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: "users",
				element: <Users />,
			},
			{
				path: "categories",
				element: <Categories />,
			},
			{
				path: "dishes",
				element: <Dishes />,
			},
		],
	},
]);

export default adminRouter;
