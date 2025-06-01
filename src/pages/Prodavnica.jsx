import "../styles/Prodavnica.css";
import categoryImage from "../assets/ShopPictures/shopPic1.jpg";
import ShopProducts from "../components/ShopProducts";

const Prodavnica = () => {
	return (
		<div className="shopPageDiv">
			<p>Naslovna - Prodavnica</p>
			<div className="shopDiv">
				<div className="shopCategoryDiv">
					<p>KATEGORIJE</p>
					<button>Ostalo</button>
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
					<button>Promo paketi</button>
					<img src={categoryImage} />
				</div>
				<ShopProducts />
			</div>
		</div>
	);
};

export default Prodavnica;
