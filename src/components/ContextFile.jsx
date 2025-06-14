import { useState, createContext } from "react";
export const MyContext = createContext();

export default function MyContextProvider({ children }) {

	const [mainColor, setMainColor] = useState("white");
	const [textColor, setTextColor] = useState("black");
	const [grayColor, setGrayColor] = useState("rgb(231, 231, 231)")
	const [inputColor, setInputColor] = useState("rgb(231, 231, 231)")
	const [show1, setShow1] = useState("-30rem");
	const [show2, setShow2] = useState("-30rem");
	const [showSidebar, setShowSidebar] = useState(false);
	const [wishList, setWishList] = useState([]);
	const [cart, setCart] = useState([]);

	const [currentBox, setBox] = useState(0);
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
				show1,
				setShow1,
				show2,
				setShow2,
				showSidebar,
				setShowSidebar,
				activeDot,
				inactiveDot,
				currentBox,
				setBox,
				wishList,
				setWishList,
				cart,
				setCart,
				mainColor,
				setMainColor,
				textColor,
				setTextColor,
				grayColor,
				setGrayColor,
			}}
		>
			{children}
		</MyContext.Provider>
	);
}
