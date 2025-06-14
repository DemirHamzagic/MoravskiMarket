import "../styles/Prodavnica.css";
import { useContext, useState } from "react";
import { MyContext } from "./ContextFile";
import { Link } from "react-router-dom";
import { ProductData, ProductImagesData } from "../data/ProductsData";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ShopProducts = () => {
	const { wishList, setWishList, textColor, grayColor } =
		useContext(MyContext);
	const ProductList1 = ProductData[0];
	const ProductImages1 = ProductImagesData[0];
	const { currentBox, setBox } = useContext(MyContext);
	const [liked, setLiked] = useState(Array(ProductList1.length).fill(false));

	const ListNumber = [0, 1];
	const inactiveBox = {
		backgroundColor: "rgb(240, 240, 240)",
		color: "black",
	};
	const activeBox = {
		backgroundColor: "rgb(255, 72, 0)",
		color: "white",
	};
	return (
		<div className="ShopProductList">
			<div className="shopHeader">
				<p style={{ color: textColor }}>16 od 32 proizvoda</p>
				<div className="shopBoxDiv">
					{ListNumber.map((_, index) => {
						return (
							<div
								className="shopBox"
								key={index}
								onClick={() => setBox(index)}
								style={
									currentBox === index
										? activeBox
										: inactiveBox
								}
							>
								{index + 1}
							</div>
						);
					})}
				</div>
			</div>
			<div className="shopItems">
				{ProductList1[currentBox].map((el, index) => {
					const Logo = liked[index] ? FaHeart : CiHeart;
					const logoClass = liked[index]
						? "heartIconProductA"
						: "heartIconProductI";
					return (
						<div
							style={{ backgroundColor: grayColor }}
							className="ShopProduct"
						>
							<div className="ProductImageDiv">
								<Link to={`/prodavnica/${el.id}`}>
									<img
										className="ShopProductImage"
										src={ProductImages1[currentBox][index]}
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
											image: ProductImages1[index],
										};
										newLiked[index] &&
										!wishList.some(
											(item) => item.name === product.name
										)
											? setWishList([
													...wishList,
													product,
											  ])
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
								<span>{el.title1}</span> -{" "}
								<span>{el.title2}</span>
							</p>
							<Link
								to={`/prodavnica/${el.id}`}
								style={{
									color: "black",
									textDecoration: "none",
								}}
							>
								<h2
									style={{ color: textColor }}
									className="ShopProductName"
								>
									{el.name}
								</h2>
							</Link>
							<h1 className="ShopPriceText">{el.price}</h1>
						</div>
					);
				})}
			</div>
			<div className="shopHeader">
				<p style={{ color: textColor }}>16 od 32 proizvoda</p>
				<div className="shopBoxDiv">
					{ListNumber.map((_, index) => {
						return (
							<div
								className="shopBox"
								key={index}
								onClick={() => setBox(index)}
								style={
									currentBox === index
										? activeBox
										: inactiveBox
								}
							>
								{index + 1}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ShopProducts;
