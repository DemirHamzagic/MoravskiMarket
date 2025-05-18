import { useContext } from "react";
import { MyContext } from "../ContextFile";
import { Link } from "react-router-dom";

import { IoIosMoon } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaBoxArchive } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";

const HeaderLinks = () => {
	const { theme, setTheme, setShow1, setShow2, setShowSidebar } =
		useContext(MyContext);
	return (
		<div className="linkHeader">
			<button
				onClick={() => {
					setShow1("0rem");
					setShowSidebar(true);
				}}
				className="categoryButton"
			>
				<TbGridDots />
				KATEGORIJE
			</button>
			<div className="linkDiv">
				<Link to="/" className="linkText">
					Naslovna
				</Link>
				<Link to="/aboutUs" className="linkText">
					O nama
				</Link>
				<Link to="/prodavnica" className="linkText">
					Prodavnica
				</Link>
				<Link to="/proizvodjaci" className="linkText">
					Proizvodjaci
				</Link>
				<Link to="/distributivni-centar" className="linkText">
					Distributivni cenat
				</Link>
				<Link to="/novosti" className="linkText">
					Novosti
				</Link>
				<Link to="/contact" className="linkText">
					Kontakt
				</Link>
			</div>
			<div className="iconDiv">
				<button
					className="themeButton"
					onClick={() =>
						setTheme(theme === "white" ? "black" : "white")
					}
				>
					{theme === "white" ? <IoIosMoon /> : <FiSun />}
				</button>
				<Link to="/lista-zelja" className="iconLink">
					<CiHeart />
				</Link>
				<FaBoxArchive
					className="iconLink"
					onClick={() => {
						setShow2("0rem");
						setShowSidebar(true);
					}}
				/>
				<Link to="/nalog" className="iconLink">
					<CiUser />
				</Link>
			</div>
		</div>
	);
};

export default HeaderLinks;
