import { Route, Routes } from "react-router";
import { routes } from "./routes";
import AppLayout from "../components/app-layout/AppLayout";

function AppRouter() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				{routes.map((route) => (
					<Route key={route.path} {...route} />
				))}
			</Route>
		</Routes>
	);
}

export default AppRouter;
