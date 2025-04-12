import { Outlet } from "react-router";
import Header from "../header/Header";
import classes from "./AppLayout.module.css";

function AppLayout() {
	return (
		<>
			<Header />
			<div className={classes.layout}>
				<Outlet />
			</div>
		</>
	);
}

export default AppLayout;
