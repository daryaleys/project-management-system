import { Navigate, RouteProps } from "react-router";
import Boards from "../pages/Boards";
import Issues from "../pages/Issues";
import Board from "../pages/Board";
import NotFound from "../pages/NotFound";

export const routes: RouteProps[] = [
	{
		path: "/",
		element: <Navigate to="/boards" />,
	},
	{
		path: "/boards",
		element: <Boards />,
	},
	{
		path: "/boards/:id",
		element: <Board />,
	},
	{
		path: "/issues",
		element: <Issues />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];
