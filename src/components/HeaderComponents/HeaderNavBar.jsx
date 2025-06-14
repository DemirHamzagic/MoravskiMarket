import { IoSearchSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../ContextFile";

import slika1 from "../../assets/MarketWhiteLogo.png"
import slika2 from "../../assets/MarketDarkLogo.png"

const HeaderNavBar = () => {
	const { mainColor, grayColor, textColor } = useContext(MyContext);
	return (
		<div className="navBar">
			<img
				className="logoImage"
				src={mainColor === "white" ? slika1 : slika2}
			/>
			<div className="inputDiv">
				<input style={{backgroundColor: grayColor, color: textColor}} className="searchInput" placeholder="Pretraga..." />
				<IoSearchSharp style={{color: textColor}} className="searchIcon" />
			</div>
			<div className="phoneDiv">
				<FaPhoneAlt style={{color: textColor}} className="phone" />
				<div>
					<p className="phoneText1">061 67 15 941</p>
					<p style={{color: textColor}} className="phoneText2">CALL CENTAR 9 - 18H</p>
				</div>
			</div>
		</div>
	);
};

export default HeaderNavBar;
