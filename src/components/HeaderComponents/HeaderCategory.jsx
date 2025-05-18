import { IoCloseOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import { useContext } from "react";
import { MyContext } from "../ContextFile";

const HeaderCategory = () => {
	const { show1, setShow1, showSidebar, setShowSidebar } =
		useContext(MyContext);
	const toggleOnBackdrop = () => {
		if (showSidebar) {
			setShowSidebar(!showSidebar);
			setShow1("-30rem");
		}
	};
	return (
		<div>
			<div
				onClick={toggleOnBackdrop}
				style={{
					opacity: show1 === "-30rem" ? 0 : 0.2,
					display: show1 === "-30rem" ? "none" : "block",
				}}
				className="overlay"
			></div>
			<div style={{ left: show1 }} className="categoryDiv">
				<button
					onClick={() => {
						setShow1("-30rem");
					}}
					className="categoryCloseButton"
				>
					<IoCloseOutline className="closeIcon" />
					Zatvorite meni
				</button>
				<div className="categoryImpoItems">
					<button>
						Novo u ponudi <FaArrowRight className="arrowIcon" />
					</button>
					<button>
						Proizvodi na akciji
						<FaArrowRight className="arrowIcon" />
					</button>
					<button>
						Proizvodjaci <FaArrowRight className="arrowIcon" />
					</button>
				</div>
				<div className="categoryItems">
					<button>Ostalo</button>
					<button>Mlecni proizvodi</button>
					<button>Meso i preradjevine</button>
					<button>Povrce i preradjevine</button>
					<button>Voce i preradjevine</button>
					<button>Sokovi i vocni sirupi</button>
					<button>Zitarice i testa</button>
					<button>Biljni proizvodi</button>
					<button>Kolaci i slatkisi</button>
					<button>Pcelarski proizvodi</button>
					<button>Alkoholna pica</button>
					<button>Ambalaza</button>
					<button>Domaca radinost</button>
					<button>Suveniri</button>
					<button>Promo paketi</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderCategory;
