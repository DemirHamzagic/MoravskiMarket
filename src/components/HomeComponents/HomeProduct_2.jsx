import product1 from "../../assets/HomeProducts2/pDiv2_product1.jpg";
import product2 from "../../assets/HomeProducts2/pDiv2_product2.jpg";
import product3 from "../../assets/HomeProducts2/pDiv2_product3.jpg";
import product4 from "../../assets/HomeProducts2/pDiv2_product4.jpg";
import product5 from "../../assets/HomeProducts2/pDiv2_product5.jpg";
import product6 from "../../assets/HomeProducts2/pDiv2_product6.jpg";
import product7 from "../../assets/HomeProducts2/pDiv2_product7.jpg";

const HomeProduct_2 = () => {
	const ProductImages = [product1, product2, product3, product4, product5, product6, product7];
	const ProductArray = [
		{
			title1: "Suveniri",
			title2: "Nam nam suveniri PR Ana Tutonovic - Cacak",
			name: "Cokanj suvenir 1/1",
			price: "200 RSD",
		},
		{
			title1: "Rakije",
			title2: "Zubor sa Kablara - PR Mladen Jovasevic - Cacak",
			name: "Zubor sa Kablara prepecenica 0,75l",
			price: "3275 RSD",
		},
		{
			title1: "Zitarice i testa",
			title2: "Poljoprivredno gazdinstvo Maric - Dedina vodenica 1892 - Kosjeric",
			name: "Belo projino brasno 1kg",
			price: "250 RSD",
		},
		{
			title1: "Sokovi i vocni sirupi",
			title2: "Sumadinka food doo - Grabovica",
			name: "Sok od maline sa medom 0,2",
			price: "200 RSD",
		},
		{
			title1: "Zitarice i testa",
			title2: "Poljoprivredno gazdinstvo Maric - Dedina vodenica 1892 - Kosjeric",
			name: "Crveno projino brasno od domaceg crvenog kukuruza 1kg",
			price: "375 RSD",
		},
		{
			title1: "Zitarice i testa",
			title2: "Poljoprivredno gazdinstvo Maric - Dedina vodenica 1892 - Kosjeric",
			name: "Belo projino brasno od domaceg kukuruza Osmaka 1kg",
			price: "395 RSD",
		},
		{
			title1: "Suveniri",
			title2: "Nam nam suveniri PR Ana Tutunovic - Cacak",
			name: "Suvenir pljoska 1/1",
			price: "295 RSD",
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

export default HomeProduct_2;
