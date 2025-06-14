import "../styles/Prodavnica.css";
import categoryImage from "../assets/ShopPictures/shopPic1.jpg";
import ShopProducts from "../components/ShopProducts";

import { ProductData } from "../data/ProductsData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../components/ContextFile";

const Prodavnica = () => {
	window.scrollTo(0, 0);
	const { mainColor, textColor } = useContext(MyContext);
	const products = ProductData.flat(Infinity);
	const categoryList = {};
	products.forEach((product) => {
		const category = product.title1;
		if (categoryList[category]) {
			categoryList[category]++;
		} else {
			categoryList[category] = 1;
		}
	});
	return (
		<div className="shopPageDiv">
			<p style={{ color: textColor }}>Naslovna - Prodavnica</p>
			<div className="shopDiv">
				<div className="shopCategoryDiv">
					<p>KATEGORIJE</p>
					{Object.entries(categoryList).map(([category, count]) => {
						return (
							<Link to={`/categorije/${category}`}>
								<button
									style={{
										color: textColor,
										backgroundColor: mainColor,
									}}
								>
									{category} ({count})
								</button>
							</Link>
						);
					})}
					<Link to={"/aboutUs"}>
						<img src={categoryImage} />
					</Link>
				</div>
				<ShopProducts />
			</div>
		</div>
	);
};

export default Prodavnica;
{
	/* <button>Ostalo</button>
<button>Mlecni proizvodi</button>
<button>Meso i preradjevine</button>
<button>Povrce i preradjevine</button>
<button>Voce i preradjevine</button>
<button>Sokovi i vocni sirupi</button>
<button>Zitarice i testa</button>
<button>Biljni proizvodi</button>
<button>Kolaci i slatkisi</button>
<button>Pcelarski proizvodi</button>
<button>Alkoholna pica</button>
<button>Ambalaza</button>
<button>Domaca radinost</button>
<button>Suveniri</button>
<button>Promo paketi</button> */
}
