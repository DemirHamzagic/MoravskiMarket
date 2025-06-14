import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./ContextFile";
import { Link } from "react-router-dom";
import { ProductImagesData } from "../data/ProductsData";

const WishListProducts = () => {
	const { wishList, setWishList, textColor, grayColor } =
		useContext(MyContext);
	const image = ProductImagesData.flat(Infinity);
	return (
		<div className="HomeProductList">
			{wishList.map((el, index) => {
				return (
					<div
						style={{ backgroundColor: grayColor }}
						key={index}
						className="HomeProduct"
					>
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
						<p style={{ color: textColor }}>
							<span>{el.title1}</span> - <span>{el.title2}</span>
						</p>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to={`/prodavnica/${el.id}`}
						>
							<h2
								style={{ color: textColor }}
								className="HomeProductName"
							>
								{el.name}
							</h2>
						</Link>
						<h1 className="HomePriceText">{el.price}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default WishListProducts;
