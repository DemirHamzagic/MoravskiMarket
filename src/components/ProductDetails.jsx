import "../styles/ProductDetails.css";
import { FaBoxArchive } from "react-icons/fa6";

import slika2 from "../assets/detailImage.png";

import { Link, useParams } from "react-router-dom";
import { MyContext } from "./ContextFile";
import { useContext } from "react";

const ProductDetails = () => {
	window.scrollTo(0, 0);
	const {
		ProductList1,
		ProductList2,
		ProductList3,
		ProductList4,
		ProductImages1,
		ProductImages2,
		ProductImages3,
		ProductImages4,
	} = useContext(MyContext);
	const { id } = useParams();
	const image = [
		...ProductImages1,
		...ProductImages2,
		...ProductImages3,
		...ProductImages4,
	].flat();
	const product = [
		...ProductList1,
		...ProductList2,
		...ProductList3,
		...ProductList4,
	]
		.flat()
		.find((item) => item.id === id);
	if (!product) {
		return <p className="missingItem">Produkt nije pronadjen!</p>;
	}
	return (
		<div className="productDetailPageDiv">
			<p>
				Naslovna - {product.title1} - {product.title2}
			</p>
			<div className="detailDiv">
				<img className="productDetailImage" src={image[id - 1]} />
				<div>
					<p>Kategorija: {product.title1}</p>
					<p>Proizvođač: {product.title2}</p>
					<h1>{product.name}</h1>
					<h1 className="priceDetailText">{product.price}</h1>
					<button className="cartAddButton">
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
