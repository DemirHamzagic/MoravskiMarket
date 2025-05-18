import { useState, createContext } from "react";
export const MyContext = createContext();

export default function MyContextProvider({ children }) {
	const [theme, setTheme] = useState("white");
	const colorObject = { white: "white", black: "black" };
	const [show1, setShow1] = useState("-30rem");
	const [show2, setShow2] = useState("-30rem");
	const [showSidebar, setShowSidebar] = useState(false);

	const [currentDot, setDot] = useState(0);
	const activeDot = {
		width: "2rem",
		backgroundColor: "rgb(255, 72, 0)",
	};
	const inactiveDot = {
		width: "1rem",
		backgroundColor: "gray",
	};
	return (
		<MyContext.Provider
			value={{
				theme,
				setTheme,
				colorObject,
				show1,
				setShow1,
				show2,
				setShow2,
				showSidebar,
				setShowSidebar,
				currentDot,
				setDot,
				activeDot,
				inactiveDot,
			}}
		>
			{children}
		</MyContext.Provider>
	);
}
