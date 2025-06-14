import productImage from "../../assets/HomeProducts3/productImage2.jpg";
import { Link } from "react-router-dom";
import { MyContext } from "../ContextFile";
import { ProductData, ProductImagesData } from "../../data/ProductsData";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState, useContext } from "react";

const HomeProduct3 = () => {
	const { wishList, setWishList, textColor, grayColor } =
		useContext(MyContext);
	const ProductList4 = ProductData[3];
	const ProductImages4 = ProductImagesData[3];
	const [liked, setLiked] = useState(Array(ProductList4.length).fill(false));

	return (
		<div className="HomeProductList">
			<Link to={"/categorije/Pcelarski proizvodi"}>
				<img className="productImage2" src={productImage} />
			</Link>
			{ProductList4.map((el, index) => {
				const Logo = liked[index] ? FaHeart : CiHeart;
				const logoClass = liked[index]
					? "heartIconProductA"
					: "heartIconProductI";
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
									src={ProductImages4[index]}
								/>
							</Link>

							<Logo
								className={logoClass}
								onClick={() => {
									const newLiked = [...liked];
									newLiked[index] = !newLiked[index];
									setLiked(newLiked);
									const product = {
										...el,
									};
									newLiked[index] &&
									!wishList.some(
										(item) => item.name === product.name
									)
										? setWishList([...wishList, product])
										: setWishList(
												wishList.filter(
													(item) =>
														item.name !==
														product.name
												)
										  );
								}}
							/>
						</div>
						<p style={{ color: textColor }}>
							<span>{el.title1}</span> - <span>{el.title2}</span>
						</p>
						<Link
							to={`/prodavnica/${el.id}`}
							className="productLinkName"
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

export default HomeProduct3;
