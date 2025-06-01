import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./ContextFile";

const WishListProducts = () => {
	const { wishList, setWishList } = useContext(MyContext);

	return (
		<div className="HomeProductList">
			{wishList.map((el, index) => {
				return (
					<div key={index} className="HomeProduct">
						<div className="ProductImageDiv">
							<img className="HomeProductImage" src={el.image} />
							<FaHeart
								className="heartIconProductA"
								onClick={() => {
									setWishList(
										wishList.filter(
											(removeIndex) => el !== removeIndex
										)
									);
								}}
							/>
						</div>
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

export default WishListProducts;
