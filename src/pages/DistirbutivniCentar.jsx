import "../styles/DistirbutivniCentar.css";
import slika1 from "../assets/CentarPictures/centarPic1.jpg";
import slika2 from "../assets/CentarPictures/centarPic2.jpg";
import slika3 from "../assets/CentarPictures/centarPic3.jpg";
import slika4 from "../assets/CentarPictures/centarPic4.jpg";

import { Link } from "react-router-dom";
import { MyContext } from "../components/ContextFile";
import { useContext, useState } from "react";
const DistirbutivniCentar = () => {
	window.scrollTo(0, 0);
	const CentarImageArray = [0, 1, 2, 3];
	const { activeDot, inactiveDot, textColor } = useContext(MyContext);
	const [currentDot, setDot] = useState(0);
	return (
		<div className="centarPageDiv">
			<p style={{ color: textColor }} className="pageTypeText">
				Naslovna - Kontakt
			</p>
			<div className="centarHeaderDiv">
				<h1>Distributivni centar</h1>
				<p style={{ color: textColor }}>
					Posetite nas i preuzmite poručene proizvode
				</p>
			</div>
			<h2 className="centarPhoneSpan">Želite da prodajete online?</h2>
			<p style={{ color: textColor }}>
				Uvećajte vaše prihode, pristupanjem najširoj mreži prodavaca na
				siguran i transparentan način. Ukoliko želite da prodajete vaše
				proizvode preko našeg portala možete nas pozvati na tel: 061 67
				15 941 ili nas kontaktirati preko{" "}
				<Link to={"/contact"} className="centarContactSpan">
					kontakt forme
				</Link>
				, a možete i direkno doći u distributivni centar.
			</p>
			<h2 style={{ color: textColor }}>Distributivni centar</h2>
			<p style={{ color: textColor }}>
				Predviđeno je da bude prodajno - izložbeno - distributivni
				centar, odnosno da se prostor koristi multifunkcionalno. U njemu
				će biti izloženi naši zdravi, lokalni, domaći proizvodi, koji su
				izloženi i na web shopu, gde će moći da se pogledaju, kupe,
				preuzmu. Služiće kao logistički centar za pripremu isporuka,
				odnosno za sabiranje, odvajanje, pakovanje i eventualno
				preuzimanje ili isporuku poručenih proizvoda.
			</p>
			<h3 style={{ color: textColor }}>
				Distributivni centar se nalazi na adresi:
			</h3>
			<p style={{ color: textColor }} className="centarAdressText">
				Bate Jankovića 48
			</p>
			<p style={{ color: textColor }} className="centarAdressText">
				32000 Čačak, Srbija
			</p>
			<p style={{ color: textColor }}>
				Tel: <span className="centarPhoneSpan">061 67 15 941</span>
			</p>
			<div className="centarImagesDiv">
				<img src={slika1} />
				<img src={slika2} />
				<img src={slika3} />
				<img src={slika4} />
			</div>
			<div className="productDots">
				{CentarImageArray.map((_, index) => {
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
		</div>
	);
};

export default DistirbutivniCentar;
