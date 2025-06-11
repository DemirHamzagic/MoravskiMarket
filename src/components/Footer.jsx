import "../styles/Footer.css";

import slika1 from "../assets/footerBackground.png";
import slika2 from "../assets/footerPic.png";

import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<img className="backgroundImage" src={slika1} />
			<div className="footerInfoDiv">
				<div className="footerChildDiv">
					<p className="headText">MAPA SAJTA</p>
					<Link to={"/"}>Naslovna</Link>
					<Link to={"/aboutUs"}>O nama</Link>
					<Link to={"/prodavnica"}>Prodavnica</Link>
					<Link to={"/proizvodjaci"}>Proizvodjaci</Link>
					<Link to={"/distributivni-centar"}>
						Distributivni centar
					</Link>
					<Link to={"/novosti"}>Novosti</Link>
					<Link to={"/contact"}>Kontakt</Link>
				</div>
				<div className="footerChildDiv">
					<p className="headText">KUPOVINA</p>
					<Link to={"/zasto-kupiti"}>Zasto da kupujem Lokalno?</Link>
					<Link to={"/kako-kupiti"}>Kako kupiti?</Link>
					<Link to={"/nacin-dostave"}>Nacin dostave</Link>
					<Link to={"/nacin-placanja"}>Nacin placanja</Link>
					<Link to={"/privace-policy"}>Politika privatnosti</Link>
				</div>
				<div className="footerChildDiv">
					<p className="headText">KONTAKT</p>
					<p>Bate Jankovica 48 32000 Cacak, Srbija</p>
					<p>
						E-mail: <span>moravskimarket@gmail.com</span>
					</p>
					<p>
						Call centar: <span>061 67 15 941</span>
					</p>
					<p>Radnim danom: 08:00-17:00h Vikendom: Ne radimo</p>
				</div>
				<div className="footerLogoDiv">
					<p className="headText">ZAPRATITE NAS</p>
					<LuFacebook className="footerIcon" />
					<FaInstagram className="footerIcon" />
					<LuYoutube className="footerIcon" />
				</div>
				<img className="footerPic" src={slika2} />
			</div>
			<p className="footerLongText">
				Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a
				plaćanje se vrši isključivo u dinarima. Nastojimo da budemo što
				precizniji u opisu proizvoda, prikazu slika i samih cena, ali ne
				možemo garantovati da su sve informacije kompletne i bez
				grešaka. Svi artikli prikazani na sajtu su deo naše ponude i ne
				podrazumeva se da su dostupni u svakom trenutku. Za
				raspoloživost artikala pozovite naš Call centar.
			</p>
			<div className="footerColoredDiv">
				<p>
					Moravski Market © 2025 Developed by <span>SuperWeb</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
