import { IoSearchSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../ContextFile";

import slika1 from "../../assets/img1.png";
import slika2 from "../../assets/img1.png";

const HeaderNavBar = () => {
	const { theme } = useContext(MyContext);
	return (
		<div className="navBar">
			<img
				className="logoImage"
				src={theme === "white" ? slika1 : slika2}
			/>
			<div className="inputDiv">
				<input className="searchInput" placeholder="Pretraga..." />
				<IoSearchSharp className="searchIcon" />
			</div>
			<div className="phoneDiv">
				<FaPhoneAlt className="phone" />
				<div>
					<p className="phoneText1">061 67 15 941</p>
					<p className="phoneText2">CALL CENTAR 9 - 18H</p>
				</div>
			</div>
		</div>
	);
};

export default HeaderNavBar;
