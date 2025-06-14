import logo1 from "../../assets/LogoPictures/logoPic1.png";
import logo2 from "../../assets/LogoPictures/logoPic2.jpg";
import logo3 from "../../assets/LogoPictures/logoPic3.jpg";
import logo4 from "../../assets/LogoPictures/logoPic4.jpg";
import logo5 from "../../assets/LogoPictures/logoPic5.jpg";
import logo6 from "../../assets/LogoPictures/logoPic6.jpg";
import logo7 from "../../assets/LogoPictures/logoPic7.jpg";
import logo8 from "../../assets/LogoPictures/logoPic8.jpg";

import { useContext } from "react";
import { MyContext } from "../ContextFile";

const HomeLogo = () => {
	const { textColor } = useContext(MyContext);
	return (
		<div style={{ color: textColor }} className="HomeLogoDiv">
			<h1>Realizatori inicijative</h1>
			<p>Organizacije i udruženja koja sprovode i finansiraju projekat</p>
			<div className="logoDiv">
				<img src={logo1} />
				<img src={logo2} />
				<img src={logo3} />
				<img src={logo4} />
				<img src={logo5} />
				<img src={logo6} />
				<img src={logo7} />
				<img src={logo8} />
			</div>
			<p className="LogoLongText">
				Izradu ovog web shopa finansirala je Evropska unija u
				partnerstvu sa Vladom Republike Srbije, preko programa EU PRO
				Plus. Sadržaj stranice je isključiva odgovornost Udruženja
				"Unija Čačak 2000" i ni na koji način ne odražava stavove
				Evropske unije.
			</p>
		</div>
	);
};

export default HomeLogo;
