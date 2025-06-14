import "../styles/Wishlist.css";

import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../components/ContextFile";
import WishListProducts from "../components/WishListProducts";

const Wishlist = () => {
	window.scrollTo(0, 0);
	const { wishList, mainColor, textColor } = useContext(MyContext);
	return (
		<div style={{ backgroundColor: mainColor }}>
			<p style={{ color: textColor }} className="pageTypeText">
				Naslovna - Lista zelja
			</p>
			{wishList.length === 0 ? (
				<div className="wishlistTxtDiv" style={{ color: textColor }}>
					<FaRegHeart />
					<p>Lista želja je prazna.</p>
				</div>
			) : (
				<div>
					<WishListProducts />
				</div>
			)}
		</div>
	);
};

export default Wishlist;
