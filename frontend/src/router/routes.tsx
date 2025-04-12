import { Navigate, RouteProps } from "react-router";
import BoardsPage from "../pages/BoardsPage";
import TasksPage from "../pages/TasksPage";
import BoardPage from "../pages/BoardPage";
import NotFound from "../pages/NotFoundPage";

export const routes: RouteProps[] = [
	{
		path: "/",
		element: <Navigate to="/tasks" />,
	},
	{
		path: "/boards",
		element: <BoardsPage />,
	},
	{
		path: "/boards/:id",
		element: <BoardPage />,
	},
	{
		path: "/tasks",
		element: <TasksPage />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];
