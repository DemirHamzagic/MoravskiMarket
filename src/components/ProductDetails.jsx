import "../styles/ProductDetails.css";
import { FaBoxArchive } from "react-icons/fa6";
import slika2 from "../assets/detailImage.png";
import { useContext } from "react";
import { MyContext } from "./ContextFile";

import { ProductData, ProductImagesData } from "../data/ProductsData";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
	const { cart, setCart, textColor } = useContext(MyContext);
	const { id } = useParams();
	const image = ProductImagesData.flat(Infinity);
	const product = ProductData.flat(Infinity).find((item) => item.id === id);
	if (!product) {
		return <p className="missingItem">Produkt nije pronadjen!</p>;
	}
	return (
		<div className="productDetailPageDiv">
			<p style={{ color: textColor }}>
				Naslovna - {product.title1} - {product.title2}
			</p>
			<div style={{ color: textColor }} className="detailDiv">
				<img className="productDetailImage" src={image[id - 1]} />
				<div>
					<p>Kategorija: {product.title1}</p>
					<p>Proizvođač: {product.title2}</p>
					<h1>{product.name}</h1>
					<h1 className="priceDetailText">{product.price}</h1>
					<button
						onClick={() => setCart([...cart, product])}
						className="cartAddButton"
					>
						<FaBoxArchive />
						Dodaj u korpu
					</button>
					<p>
						Prava potrošača: Zagarantovana sva prava kupaca po
						osnovu zakona o zaštiti potrošača.
					</p>
				</div>
				<Link to={"/aboutUs"}>
					<img className="sideImage" src={slika2} />
				</Link>
			</div>
		</div>
	);
};

export default ProductDetails;
