import { IoCloseOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import { useContext } from "react";
import { MyContext } from "../ContextFile";
import { Link } from "react-router-dom";

const HeaderCategory = () => {
	const {
		show1,
		setShow1,
		showSidebar,
		setShowSidebar,
		ProductList1,
		ProductList2,
		ProductList3,
		ProductList4,
	} = useContext(MyContext);
	const toggleOnBackdrop = () => {
		if (showSidebar) {
			setShowSidebar(!showSidebar);
			setShow1("-30rem");
		}
	};
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
		<div>
			<div
				onClick={toggleOnBackdrop}
				style={{
					opacity: show1 === "-30rem" ? 0 : 0.2,
					display: show1 === "-30rem" ? "none" : "block",
				}}
				className="overlay"
			></div>
			<div style={{ left: show1 }} className="categoryDiv">
				<button
					onClick={() => {
						setShow1("-30rem");
					}}
					className="categoryCloseButton"
				>
					<IoCloseOutline className="closeIcon" />
					Zatvorite meni
				</button>
				<div className="categoryImpoItems">
					<button>
						Novo u ponudi <FaArrowRight className="arrowIcon" />
					</button>
					<button>
						Proizvodi na akciji
						<FaArrowRight className="arrowIcon" />
					</button>
					<Link to={"/proizvodjaci"}>
						<button>
							Proizvodjaci <FaArrowRight className="arrowIcon" />
						</button>
					</Link>
				</div>
				<div className="categoryItems">
					{Object.entries(categoryList).map(([category, count]) => {
						return (
							<Link to={`/categorije/${category}`}>
								<button>
									{category} ({count})
								</button>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HeaderCategory;
