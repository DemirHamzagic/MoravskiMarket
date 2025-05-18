import { FaBoxArchive } from "react-icons/fa6";
import { MyContext } from "../ContextFile";
import { useContext } from "react";

const HeaderCart = () => {
	const { show2, setShow2, showSidebar, setShowSidebar } =
		useContext(MyContext);
	const toggleOnBackdrop = () => {
		if (showSidebar) {
			setShowSidebar(!showSidebar);
			setShow2("-30rem");
		}
	};
	return (
		<div>
			<div
				onClick={toggleOnBackdrop}
				style={{
					opacity: show2 === "-30rem" ? 0 : 0.2,
					display: show2 === "-30rem" ? "none" : "block",
				}}
				className="overlay"
			></div>
			<div style={{ right: show2 }} className="cartDiv">
				<FaBoxArchive />
				<p className="emptyCartText">Korpa je prazna.</p>
			</div>
		</div>
	);
};

export default HeaderCart;
