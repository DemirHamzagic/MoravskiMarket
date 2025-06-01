import HomeImage from "../components/HomeComponents/HomeImage";
import homeImage1 from "../assets/homePic1.jpg";
import homeImage2 from "../assets/homePic2.jpg";
import NeedMorePic from "../assets/NeedMorePic.jpg";

import HomeProduct1 from "../components/HomeComponents/HomeProduct1";
import HomeWelcomeDiv from "../components/HomeComponents/HomeWelcomeDiv";
import HomeProduct2 from "../components/HomeComponents/HomeProduct2";
import HomeProduct3 from "../components/HomeComponents/HomeProduct3";
import HomeNews from "../components/HomeComponents/HomeNews";
import HomeLogo from "../components/HomeComponents/HomeLogo";

import { MyContext } from "../components/ContextFile";
import { useContext, useState } from "react";
const Home = () => {
	const { activeDot, inactiveDot } = useContext(MyContext);
	const [currentDot1, setDot1] = useState(0);
	const [currentDot2, setDot2] = useState(0);
	const [currentDot3, setDot3] = useState(0);
	const [currentDot4, setDot4] = useState(0);
	const [currentDot5, setDot5] = useState(0);
	const homeImageArray = [0, 1];
	const productArray1 = [0, 1, 2, 3, 4, 5, 6, 7];
	const productArray2 = [0, 1, 2, 3];
	const productArray3 = [0, 1, 2, 3, 4];
	return (
		<div className="HomePageDiv">
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
							onClick={() => setDot1(index)}
							style={
								currentDot1 === index ? activeDot : inactiveDot
							}
						></div>
					);
				})}
			</div>

			<HomeWelcomeDiv />

			<div className="productDiv1">
				<h1>Kupuj lokalno, da komšiji krava bude živa i zdrava!</h1>
				<p>Izdvajamo za vas zdrave i kvalitetne domaće proizvode!</p>
				<HomeProduct1 />
				<div className="productDots">
					{productArray1.map((_, index) => {
						return (
							<div
								className="dotDiv"
								key={index}
								onClick={() => setDot2(index)}
								style={
									currentDot2 === index
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
				<HomeProduct2 />
			</div>
			<div className="productDots">
				{productArray2.map((_, index) => {
					return (
						<div
							className="dotDiv"
							key={index}
							onClick={() => setDot3(index)}
							style={
								currentDot3 === index ? activeDot : inactiveDot
							}
						></div>
					);
				})}
			</div>

			<div className="productDiv3">
				<h1>Pcelarski proizvodi</h1>
				<p>Prirodni pčelinji proizvodi sa dugom tradicijom</p>
				<HomeProduct3 />
				<div className="productDots">
					{productArray3.map((_, index) => {
						return (
							<div
								className="dotDiv"
								key={index}
								onClick={() => setDot4(index)}
								style={
									currentDot4 === index
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
							onClick={() => setDot5(index)}
							style={
								currentDot5 === index ? activeDot : inactiveDot
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
