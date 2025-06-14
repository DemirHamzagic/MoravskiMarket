import "../styles/Header.css";
import { useContext } from "react";
import { MyContext } from "./ContextFile";

import HeaderLinks from "./HeaderComponents/HeaderLinks.jsx";
import HeaderCategory from "./HeaderComponents/HeaderCategory.jsx";
import HeaderCart from "./HeaderComponents/HeaderCart.jsx";
import HeaderNavBar from "./HeaderComponents/HeaderNavBar.jsx";

const Header = () => {
	const { mainColor } = useContext(MyContext);
	return (
		<div
			className="bodyDiv"
			style={{ backgroundColor: mainColor}}
		>
			<HeaderCategory />
			<HeaderCart />
			<HeaderNavBar />
			<HeaderLinks />
		</div>
	);
};

export default Header;
