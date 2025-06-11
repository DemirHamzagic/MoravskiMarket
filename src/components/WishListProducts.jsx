import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./ContextFile";
import { Link } from "react-router-dom";

const WishListProducts = () => {
	const {
		wishList,
		setWishList,
		ProductImages1,
		ProductImages2,
		ProductImages3,
		ProductImages4,
	} = useContext(MyContext);
	const image = [
		ProductImages1,
		ProductImages2,
		ProductImages3,
		ProductImages4,
	].flat(Infinity);
	return (
		<div className="HomeProductList">
			{wishList.map((el, index) => {
				return (
					<div key={index} className="HomeProduct">
						<div className="ProductImageDiv">
							<Link to={`/prodavnica/${el.id}`}>
								<img
									className="HomeProductImage"
									src={image[el.id - 1]}
								/>
							</Link>
							<FaHeart
								className="heartIconProductA"
								onClick={() => {
									setWishList(
										wishList.filter(
											(removeIndex) => el !== removeIndex
										)
									);
								}}
							/>
						</div>
						<p>
							<span>{el.title1}</span> - <span>{el.title2}</span>
						</p>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to={`/prodavnica/${el.id}`}
						>
							<h2 className="HomeProductName">{el.name}</h2>
						</Link>
						<h1 className="HomePriceText">{el.price}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default WishListProducts;
