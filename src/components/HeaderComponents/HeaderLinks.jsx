import { useContext } from "react";
import { MyContext } from "../ContextFile";
import { Link, useLocation } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaBoxArchive } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";

const HeaderLinks = () => {
	const location = useLocation();
	const {
		mainColor,
		setMainColor,
		textColor,
		setTextColor,
		grayColor,
		setGrayColor,
		setShow1,
		setShow2,
		setShowSidebar,
		wishList,
		cart,
	} = useContext(MyContext);
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
				<Link
					to="/"
					className={
						location.pathname === "/" ? "activeLink" : "linkText"
					}
				>
					Naslovna
				</Link>
				<Link
					to="/aboutUs"
					className={
						location.pathname === "/aboutUs"
							? "activeLink"
							: "linkText"
					}
				>
					O nama
				</Link>
				<Link
					to="/prodavnica"
					className={
						location.pathname === "/prodavnica"
							? "activeLink"
							: "linkText"
					}
				>
					Prodavnica
				</Link>
				<Link
					to="/proizvodjaci"
					className={
						location.pathname === "/proizvodjaci"
							? "activeLink"
							: "linkText"
					}
				>
					Proizvodjaci
				</Link>
				<Link
					to="/distributivni-centar"
					className={
						location.pathname === "/distributivni-centar"
							? "activeLink"
							: "linkText"
					}
				>
					Distributivni cenat
				</Link>
				<Link
					to="/novosti"
					className={
						location.pathname === "/novosti"
							? "activeLink"
							: "linkText"
					}
				>
					Novosti
				</Link>
				<Link
					to="/contact"
					className={
						location.pathname === "/contact"
							? "activeLink"
							: "linkText"
					}
				>
					Kontakt
				</Link>
			</div>
			<div className="iconDiv">
				<button
					className="themeButton"
					onClick={() => {
						setMainColor(
							mainColor === "white" ? "rgb(27, 28, 31)" : "white"
						);
						setTextColor(textColor === "black" ? "white" : "black");
						setGrayColor(
							grayColor === "rgb(231, 231, 231)"
								? "rgb(77, 75, 85)"
								: "rgb(231, 231, 231)"
						);
					}}
				>
					{mainColor === "white" ? <IoIosMoon /> : <FiSun />}
				</button>
				<Link to="/lista-zelja" className="iconLink">
					<div className="heartHeaderDiv">
						<CiHeart />
						<div>{wishList.length}</div>
					</div>
				</Link>
				<div className="boxIconDiv">
					<FaBoxArchive
						className="iconLink"
						onClick={() => {
							setShow2("0rem");
							setShowSidebar(true);
						}}
					/>
					<div>{cart.length}</div>
				</div>
				<Link to="/nalog" className="iconLink">
					<CiUser />
				</Link>
			</div>
		</div>
	);
};

export default HeaderLinks;
