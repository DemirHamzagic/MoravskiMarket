import HomeImage from "../components/HomeComponents/HomeImage";
import homeImage1 from "../assets/homePic1.jpg";
import homeImage2 from "../assets/homePic2.jpg";
import NeedMorePic from "../assets/NeedMorePic.jpg";

import HomeProduct_1 from "../components/HomeComponents/HomeProduct_1";
import HomeWelcomeDiv from "../components/HomeComponents/HomeWelcomeDiv";
import HomeProduct_2 from "../components/HomeComponents/HomeProduct_2";
import HomeProduct_3 from "../components/HomeComponents/HomeProduct_3";
import HomeNews from "../components/HomeComponents/HomeNews";
import HomeLogo from "../components/HomeComponents/HomeLogo";

import { MyContext } from "../components/ContextFile";
import { useContext } from "react";
const Home = () => {
	const { currentDot, setDot, activeDot, inactiveDot } =
		useContext(MyContext);
	const homeImageArray = [0, 1];
	const productArray1 = [0, 1, 2, 3, 4, 5, 6, 7];
	const productArray2 = [0, 1, 2, 3];
	const productArray3 = [0, 1, 2, 3, 4];
	return (
		<div
			style={{ paddingRight: currentDot === 1 ? "1rem" : "0rem" }}
			className="HomePageDiv"
		>
			<div className="HomeComponentDiv">
				<HomeImage
					homeImage={homeImage1}
					headerText="Dobro dosli u Moravski Market!"
					infoText="Najrazlicitija ponuda proizvoda lokalnih proizvodjaca!"
				/>
				<HomeImage
					homeImage={homeImage2}
					headerText="Distributivni centar"
					infoText="Preuzmite porucene proizvode, sve na jednom mestu"
				/>
			</div>
			<div className="productDots">
				{homeImageArray.map((_, index) => {
					return (
						<div
							className="dotDiv"
							key={index}
							onClick={() => setDot(index)}
							style={
								currentDot === index ? activeDot : inactiveDot
							}
						></div>
					);
				})}
			</div>

			<HomeWelcomeDiv />

			<div className="productDiv1">
				<h1>Kupuj lokalno, da komšiji krava bude živa i zdrava!</h1>
				<p>Izdvajamo za vas zdrave i kvalitetne domaće proizvode!</p>
				<HomeProduct_1 />
				<div className="productDots">
					{productArray1.map((_, index) => {
						return (
							<div
								className="dotDiv"
								key={index}
								onClick={() => setDot(index)}
								style={
									currentDot === index
										? activeDot
										: inactiveDot
								}
							></div>
						);
					})}
				</div>
			</div>

			<div className="productDiv2">
				<h1 className="product2Text">Najprodavaniji artikli</h1>
				<HomeProduct_2 />
			</div>
			<div className="productDots">
				{productArray2.map((_, index) => {
					return (
						<div
							className="dotDiv"
							key={index}
							onClick={() => setDot(index)}
							style={
								currentDot === index ? activeDot : inactiveDot
							}
						></div>
					);
				})}
			</div>

			<div className="productDiv3">
				<h1>Pcelarski proizvodi</h1>
				<p>Prirodni pčelinji proizvodi sa dugom tradicijom</p>
				<HomeProduct_3 />
				<div className="productDots">
					{productArray3.map((_, index) => {
						return (
							<div
								className="dotDiv"
								key={index}
								onClick={() => setDot(index)}
								style={
									currentDot === index
										? activeDot
										: inactiveDot
								}
							></div>
						);
					})}
				</div>
			</div>

			<div className="componentDiv4">
				<img src={NeedMorePic} />
				<h1>Zelite da prodajete online!</h1>
				<p className="componentDiv4Text1">
					Uvecajte vase prihode pristupanjem nasoj mrezi prodavaca na
					siguran i transparentan nacin
				</p>
				<p className="componentDiv4Text2">Saznaj vise →</p>
			</div>

			<HomeNews />
			<div className="productDots">
				{homeImageArray.map((_, index) => {
					return (
						<div
							className="dotDiv"
							key={index}
							onClick={() => setDot(index)}
							style={
								currentDot === index ? activeDot : inactiveDot
							}
						></div>
					);
				})}
			</div>

			<HomeLogo />
		</div>
	);
};

export default Home;
