import "../../styles/helpPages/PrivacePolicy.css";
import { useContext } from "react";
import { MyContext } from "../../components/ContextFile";

const PrivacePolicy = () => {
	window.scrollTo(0, 0);
	const { textColor } = useContext(MyContext);
	return (
		<div style={{ color: textColor }} className="PrivacePolicyPageDiv">
			<p className="pageTypeText">Naslovna - Politika privatnosti</p>
			<div>
				<h1 className="PrivacePolicyHeader">
					Politika privatnosti i uslovi korišćenja
				</h1>
				<p>
					Da bismo uspešno obradili Vašu narudžbu potrebni su nam Vaše
					ime i prezime, adresa, e-mail i telefon. Uz pomoć tih
					podataka bićemo u mogućnosti da Vam isporučimo željenu robu,
					kao i da Vas obavestimo o trenutnom statusu narudžbe.
				</p>
				<p>
					U ime <span>Moravskog Marketa</span> obavezujemo se da ćemo
					čuvati privatnost svih naših kupaca. Prikupljamo samo
					neophodne, osnovne podatke o kupcima/korisnicima i podatke
					neophodne za poslovanje i informisanje korisnika u skladu sa
					dobrim poslovnim običajima i u cilju pružanja kvalitetne
					usluge.
				</p>
				<p>
					Svi podaci o kupcima/korisnicima se strogo čuvaju i dostupni
					su samo zaposlenima kojima su podaci nužni za obavljanje
					posla. Svi zaposleni u <span>Moravskom Marketu</span>{" "}
					odgovorni su za poštovanje načela zaštite privatnosti. Pored
					navedenih prikupljamo, analiziramo i obrađujemo podatke o
					proizvodima koje naši posetioci traže i kupuju, kao i o
					stranicama koje posećuju. Te podatke koristimo da bismo
					poboljšali ponudu i izgled naših stranica, i omogućili Vam
					jednostavnije korišćenje, sigurniju i udobniju kupovinu.
					Obavezujemo se da prikupljene podatke ne koristimo ni u koje
					druge svrhe.
				</p>
				<p>
					Korišćenje naših servisa podrazumeva saglasnost korisnika sa
					svim navedenim na ovoj strani. <br />
					<span>Moravski Market</span> se obavezuje da će se
					pridržavati svega navedenog, a sve promene uslova postaju
					važeće tek nakon objavljivanja na ovoj strani. Hvala na
					ukazanom poverenju.
				</p>
			</div>
		</div>
	);
};

export default PrivacePolicy;
