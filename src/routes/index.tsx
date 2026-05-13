import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Login from "../pages/admin/Login";
import AdminLayout from "../components/admin/AdminLayout";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Categories from "../pages/admin/Categories";
import Dishes from "../pages/admin/Dishes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/menu",
		element: <Menu />,
	},
	{
		path: "/admin/login",
		element: <Login />,
	},
	{
		element: (
			<ProtectedRoute>
				<AdminLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: "/admin",
				element: <Dashboard />,
			},
			{
				path: "/admin/users",
				element: <Users />,
			},
			{
				path: "/admin/categories",
				element: <Categories />,
			},
			{
				path: "/admin/dishes",
				element: <Dishes />,
			},
		],
	},
]);

export default function Routes() {
	return <RouterProvider router={router} />;
}
