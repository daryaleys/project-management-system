import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import { ModalProvider } from "./context/ModalContext";

function App() {
	return (
		<BrowserRouter>
			<ModalProvider>
				<AppRouter />
			</ModalProvider>
		</BrowserRouter>
	);
}

export default App;
