import "../styles/Prodavnica.css";
import categoryImage from "../assets/ShopPictures/shopPic1.jpg";
import ShopProducts from "../components/ShopProducts";
import { useContext } from "react";
import { MyContext } from "../components/ContextFile";
import { Link } from "react-router-dom";

const Prodavnica = () => {
	window.scrollTo(0, 0);
	const { ProductList1, ProductList2, ProductList3, ProductList4 } =
		useContext(MyContext);
	const products = [
		ProductList1,
		ProductList2,
		ProductList3,
		ProductList4,
	].flat(Infinity);
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
			<p>Naslovna - Prodavnica</p>
			<div className="shopDiv">
				<div className="shopCategoryDiv">
					<p>KATEGORIJE</p>
					{Object.entries(categoryList).map(([category, count]) => {
						return (
							<Link to={`/categorije/${category}`}>
								<button>
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
