import "../../styles/helpPages/NacinPlacanja.css";
import { useContext } from "react";
import { MyContext } from "../../components/ContextFile";

const NacinPlacanja = () => {
	window.scrollTo(0, 0);
	const { textColor } = useContext(MyContext);
	return (
		<div style={{ color: textColor }} className="NacinPlacanjaPageDiv">
			<p className="pageTypeText">Naslovna - Kako kupiti?</p>
			<div>
				<p>
					<span>Fizička lica:</span> Gotovinski prilikom preuzimanja
					ili isporuke proizvoda
				</p>
				<p>
					<span>Pravna lica</span> : <br />
					<br />
					Opcija 1- Gotovinski račun <br />
					Opcija 2- Virmanski račun ( faktura )
				</p>
				<p>
					Podaci o pravnom licu, koje ste ostavili u okviru forme
					"Podaci za poručivanje" , ćemo koristiti za formiranje
					fakture
				</p>
			</div>
		</div>
	);
};

export default NacinPlacanja;
