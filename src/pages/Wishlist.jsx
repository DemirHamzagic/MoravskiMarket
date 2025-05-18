import { FaRegHeart } from "react-icons/fa";
import "../styles/Wishlist.css";
const Wishlist = () => {
	return (
		<div>
			<p className="pageTypeText">Naslovna - Lista zelja</p>
			<div className="wishlistTxtDiv">
				<FaRegHeart />
				<p>Lista želja je prazna.</p>
			</div>
		</div>
	);
};

export default Wishlist;
