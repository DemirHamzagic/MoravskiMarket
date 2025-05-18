import "../styles/Footer.css";

import slika1 from "../assets/footerBackground.png";
import slika2 from "../assets/footerPic.png";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";

const Footer = () => {
	return (
		<div>
			<img className="backgroundImage" src={slika1} />
			<div className="footerInfoDiv">
				<div className="footerChildDiv">
					<p className="headText">MAPA SAJTA</p>
					<button>Naslovna</button>
					<button>O nama</button>
					<button>Prodavnica</button>
					<button>Proizvodjaci</button>
					<button>Distributivni centar</button>
					<button>Novosti</button>
					<button>Kontakt</button>
				</div>
				<div className="footerChildDiv">
					<p className="headText">KUPOVINA</p>
					<button>Zasto da kupujem Lokalno?</button>
					<button>Kako kupiti?</button>
					<button>Nacin dostave</button>
					<button>Nacin placanja</button>
					<button>Politika privatnosti</button>
				</div>
				<div className="footerChildDiv">
					<p className="headText">KONTAKT</p>
					<p>Bate Jankovica 48 32000 Cacak, Srbija</p>
					<p>E-mail: moravskimarket@gmail.com</p>
					<p>Call centar: 061 67 15 941</p>
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
				Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje se vrši isključivo u dinarima. Nastojimo da budemo što precizniji u opisu proizvoda, prikazu
				slika i samih cena, ali ne možemo garantovati da su sve informacije kompletne i bez grešaka. Svi artikli prikazani na sajtu su deo naše ponude i ne podrazumeva se
				da su dostupni u svakom trenutku. Za raspoloživost artikala pozovite naš Call centar.
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
