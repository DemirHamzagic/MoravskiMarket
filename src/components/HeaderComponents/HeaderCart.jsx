import { FaBoxArchive } from "react-icons/fa6";
import { MyContext } from "../ContextFile";
import { useContext, useState, useEffect } from "react";
import { ProductImagesData } from "../../data/ProductsData";

const HeaderCart = () => {
	const image = ProductImagesData.flat(Infinity)
	const [total, setTotal] = useState(0)
	const { show2, setShow2, showSidebar, setShowSidebar, cart, setCart, mainColor, grayColor, textColor, } =
		useContext(MyContext);
	const toggleOnBackdrop = () => {
		if (showSidebar) {
			setShowSidebar(!showSidebar);
			setShow2("-30rem");
		}
	};
	useEffect(() => {
		const newTotal = cart.reduce((acc, el) => acc + parseInt(el.price), 0);
		setTotal(newTotal);
	}, [cart]);
	return (
		<div>
			<div
				onClick={toggleOnBackdrop}
				style={{
					opacity: show2 === "-30rem" ? 0 : 0.2,
					display: show2 === "-30rem" ? "none" : "block",
				}}
				className="overlay"
			></div>
			<div style={{ right: show2, backgroundColor: mainColor }} className="cartDiv">
				{cart.length === 0 ? (<div className="emptyCartDiv" style={{color: textColor}}>
					<FaBoxArchive /><p className="emptyCartText">Korpa je prazna.</p> </div>) : 
				(<div className="fullCartDiv">
					<h1 className="cartText" style={{color: textColor}}>Korpa</h1>
					<div className="cartProductDiv" style={{color: textColor, backgroundColor: grayColor}}>
						<p>Ukupno:</p>
						<h1 className="cartPriceText">{total}</h1>
					</div>
					{cart.map((el, index) => {
						return (
							<div className="cartParentDiv" key={index}>
								<div className="cartImageDiv">
									<img className="cartProductImage" src={image[el.id - 1]}/>
								</div>
								<h1 style={{color: textColor}} className="cartNameText">{el.name}</h1>
								<p style={{color: textColor}} className="cartProductPrice">{el.price} x 1 = <span>{el.price}</span></p>
								<div className="removeButtonDiv">
									<button style={{color: textColor, backgroundColor: grayColor}} onClick={() => {
										const newCart = [...cart]
										newCart.splice(index, 1)
										setCart(newCart)
									}} className="cartRemoveButton">X uklonite</button>
								</div>
							</div>
						)
					})}
					<button className="cartBuyButton">ZAVRSITE PORUDZBINU</button>
				</div>)}
			</div>
		</div>
	);
};

export default HeaderCart;
