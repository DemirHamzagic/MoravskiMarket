import image from "../../assets/NacinDostaveImg.jpg";
import "../../styles/helpPages/NacinDostave.css";

const NacinDostave = () => {
	window.scrollTo(0, 0);
	return (
		<div className="NacinDostavePageDiv">
			<p className="pageTypeText">Naslovna - Način dostave</p>
			<h1 className="NacinDostaveHeader">Način dostave</h1>
			<div>
				<p>Dostavu naših proizvoda vršimo na sledeće načine:</p>
				<h1 className="optionBigText">Opcija 1</h1>
				<p>
					Lično preuzimanje u prodavnici / distributivnom centru -
					<span> besplatno</span>.
				</p>
				<h1 className="optionBigText">Opcija 2</h1>
				<p>
					Dostava na adresu na teritoriji Grada Čačka (u krugu od 5km
					od prodavnice/ distributivnog centra) se naplaćuje
					<span> 300 rsd za isporuke do 20kg težine</span>.
				</p>
				<div className="NacinDostaveImageDiv">
					<img src={image} />
				</div>
				<h1 className="optionBigText">Opcija 3</h1>
				<p>
					Dostava na adresu van Grada Čačka (isporuka brzom poštom po
					ceni kurirske službe
					<span>
						{" "}
						https://www.cityexpress.rs/cenovnik-domaci-transport/
					</span>
					)
				</p>
				<h1 className="optionBigText">Opcija 4</h1>
				<p>
					U slučaju da Vam prethodne opcije ne odgovaraju,
					kontaktiraćemo Vas oko dogovora.
				</p>
			</div>
		</div>
	);
};

export default NacinDostave;
