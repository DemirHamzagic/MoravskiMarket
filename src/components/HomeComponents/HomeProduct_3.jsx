import product1 from "../../assets/HomeProducts3/pDiv3_product1.jpg";
import product2 from "../../assets/HomeProducts3/pDiv3_product2.jpg";
import product3 from "../../assets/HomeProducts3/pDiv3_product3.jpg";
import product4 from "../../assets/HomeProducts3/pDiv3_product4.jpg";
import product5 from "../../assets/HomeProducts3/pDiv3_product5.jpg";
import product6 from "../../assets/HomeProducts3/pDiv3_product6.jpg";
import product7 from "../../assets/HomeProducts3/pDiv3_product7.jpg";

const HomeProduct_3 = () => {
	const ProductImages = [product1, product2, product3, product4, product5, product6, product7];
	const ProductArray = [
		{
			title1: "Pcelarski proizvodi",
			title2: "Poljoprivredno gazdinstvo Muntilakovic - Plodovi Srbije - Cacak",
			name: "Imuno med 300g",
			price: "890 RSD",
		},
		{
			title1: "Pcelarski proizvodi",
			title2: "Poljoprivredno gazdinstvo Muntilakovic - Plodovi Srbije - Cacak",
			name: "Imuno med za decu 300g",
			price: "990 RSD",
		},
		{
			title1: "Pcelarski proizvodi",
			title2: "Poljoprivredno gazdinstvo Marjan Gojkovic - Cacak",
			name: "Med-djumbir 500g",
			price: "875 RSD",
		},
		{
			title1: "Pcelarski proizvodi",
			title2: "Poljoprivredno gazdinstvo Muntilakovic - Plodovi Srbije - Cacak",
			name: "Krem med sa malinom 300g",
			price: "590 RSD",
		},
		{
			title1: "Pcelarski proizvodi",
			title2: "Poljoprivredno gazdinstvo Marjan Gojkovic - Cacak",
			name: "Med-mlec 500g",
			price: "1125 RSD",
		},
		{
			title1: "Pcelarski proizvodi",
			title2: "Poljoprivredno gazdinstvo Muntilakovic - Plodovi Srbije - Cacak",
			name: "Livadski med 320g",
			price: "430 RSD",
		},
		{
			title1: "Pcelarski proizvodi",
			title2: "Poljoprivredno gazdinstvo Muntilakovic - Plodovi Srbije - Cacak",
			name: "Bagremov med 320g",
			price: "590 RSD",
		},
	];
	return (
		<div className="HomeProductList">
			{ProductArray.map((el, index) => {
				return (
					<div className="HomeProduct">
						<img className="HomeProductImage" src={ProductImages[index]} />
						<p>
							<span>{el.title1}</span> - <span>{el.title2}</span>
						</p>
						<h2 className="HomeProductName">{el.name}</h2>
						<h1 className="HomePriceText">{el.price}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default HomeProduct_3;
