import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyContextProvider from "./components/ContextFile.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<MyContextProvider>
			<App />
		</MyContextProvider>
	</StrictMode>
);
