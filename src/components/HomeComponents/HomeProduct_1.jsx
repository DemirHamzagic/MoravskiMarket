import productImage from "../../assets/HomeProducts1/productImage.jpg";
import product1 from "../../assets/HomeProducts1/pDiv1_product1.jpg";
import product2 from "../../assets/HomeProducts1/pDiv1_product2.png";
import product3 from "../../assets/HomeProducts1/pDiv1_product3.png";
import product4 from "../../assets/HomeProducts1/pDiv1_product4.png";
import product5 from "../../assets/HomeProducts1/pDiv1_product5.jpg";
import product6 from "../../assets/HomeProducts1/pDiv1_product6.jpg";
import product7 from "../../assets/HomeProducts1/pDiv1_product7.jpg";

const HomeProduct_1 = () => {
	const ProductImages = [product1, product2, product3, product4, product5, product6, product7];
	const ProductArray = [
		{
			title1: "Zitarice i testa",
			title2: "Poljoprivredno gazdinstvo Nikolic - Pozega",
			name: "Belo projino brasno od osmaka 1kg",
			price: "195 RSD",
		},
		{
			title1: "Vina",
			title2: "Vinarija Tomic - Rosci",
			name: "Vino L'ame - Pino noar 700ml",
			price: "1195 RSD",
		},
		{
			title1: "Vina",
			title2: "Vinarija Tomic - Rosci",
			name: "Vino tete - Chardonay 700ml",
			price: "1195 RSD",
		},
		{
			title1: "Vina",
			title2: "Vinarija Tomic - Rosci",
			name: "Vino Igra 650 - Tamjanika 700ml",
			price: "1195 RSD",
		},
		{
			title1: "Rakije",
			title2: "Destilerija Zimovic - Goracici",
			name: "Majkica sljivovica 500ml",
			price: "1595 RSD",
		},
		{
			title1: "Rakije",
			title2: "Destilerija Zimovic - Goracici",
			name: "Majkica Viljamovka 700ml",
			price: "1745 RSD",
		},
		{
			title1: "Rakije",
			title2: "Zubor sa Kalbara - PR Mladen Jovasevic - Cacak",
			name: "Zubor sa Kablara u drvenoj kutiji",
			price: "2750 RSD",
		},
	];
	return (
		<div className="HomeProductList">
			<img className="productImage" src={productImage} />
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

export default HomeProduct_1;
