import "../styles/ShopCategory.css";
import categoryImage from "../assets/ShopPictures/shopPic1.jpg";

import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductData, ProductImagesData } from "../data/ProductsData";
import { MyContext } from "./ContextFile";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ShopCategories = () => {
	const { wishList, setWishList, grayColor, textColor } =
		useContext(MyContext);
	const { category } = useParams();
	const image = ProductImagesData.flat(Infinity);
	const products = ProductData.flat(Infinity);
	const [liked, setLiked] = useState(Array(products.length).fill(false));

	const proizvodjaciList = {};
	products
		.filter((el) => el.title1 === category)
		.forEach((product) => {
			const category = product.title2;
			if (proizvodjaciList[category]) {
				proizvodjaciList[category]++;
			} else {
				proizvodjaciList[category] = 1;
			}
		});
	return (
		<div className="shopCategoryPageDiv">
			<p style={{ color: textColor }}>Naslovna - Prodavnica</p>
			<div className="shopCategoryMainDiv">
				<div className="categoryListDiv">
					<Link style={{ color: textColor }} to={"/prodavnica"}>
						- Sve kategorije
					</Link>
					<p className="ProizvodjaciText">{category.toUpperCase()}</p>
					<p style={{ color: textColor }} className="CategoryBigText">
						PROIZVODJACI
					</p>
					{Object.entries(proizvodjaciList).map(
						([proizvodjac, count]) => {
							return (
								<div style={{ color: textColor }}>
									<input type="checkbox" />
									<label>
										{proizvodjac} - ({count})
									</label>
								</div>
							);
						}
					)}
					<img src={categoryImage} />
				</div>
				<div className="shopCategoryProducts">
					{products
						.filter((el) => el.title1 === category)
						.map((el, index) => {
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
												src={image[el.id - 1]}
											/>
										</Link>
										<Logo
											className={logoClass}
											onClick={() => {
												const newLiked = [...liked];
												newLiked[index] =
													!newLiked[index];
												setLiked(newLiked);
												const product = { ...el };
												newLiked[index] &&
												!wishList.some(
													(item) =>
														item.name ===
														product.name
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
									<h1 className="ShopPriceText">
										{el.price}
									</h1>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default ShopCategories;
