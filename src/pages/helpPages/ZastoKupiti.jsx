import "../../styles/helpPages/ZastoKupiti.css";
import { useContext } from "react";
import { MyContext } from "../../components/ContextFile";

const ZastoKupiti = () => {
	window.scrollTo(0, 0);
	const { textColor } = useContext(MyContext);
	return (
		<div style={{ color: textColor }} className="ZastoKupitiPageDiv">
			<p className="pageTypeText">Naslovna - Zašto da kupujem Lokalno?</p>
			<h1 className="ZastoKupitiHeader">Zašto da kupujem lokalno?</h1>
			<div>
				<p>
					Razlog da kada kupuješ ne izabereš lokalne, domaće proizode
					može biti samo jedan. Viša cena.
				</p>
				<p className="ZastoKupitiBolderText">
					Razloga da kada kupuješ biraš lokalne , domaće proizvode je
					mnogo više:
				</p>
				<p>
					- proizvedeni su od strane tvojih komšija, prijatelja,
					poznanika,
					<br />
					- proizvedeni su od sirovina gajenih u tvom mestu ili tvom
					selu,
					<br />
					- proizvedeni su na način kako se to radilo decenijama i
					generacijama,
					<br />
					- proizvedeni su zanatski ili su ručno rađeni ,<br />-
					proizvedeni su bez dodavanja raznih e-dodataka (emuglatora),
					stabilizatora, pojačivača ukusa, zaslađivača i sl
				</p>
				<p className="ZastoKupitiBolderText">
					Zbog svega ovoga su zdraviji, ukusniji, kvalitetniji, bolji!
				</p>
				<p>
					Još je mnogo razloga da izabereš lokalne, domaće proizvode:{" "}
					<br />
					- utičeš na smanjenja zagađenja životne sredine pošto nisu
					transportovani sa drugog kraja sveta,
					<br />
					- utičeš njihovom proizvodnjom na dodatno angažuje ili
					zapošljavnje lokalnog stanovništva, pre svega lepšeg pola,
					<br />
					- utičeš na angažovanju stanovništva u ruralnim sredinama
					kako na preradi tako i na gajenju voća, povrća, životinja,
					<br />
					- utičeš na osnaživanju i razvoju lokalne, domaće
					proizvodnje,
					<br />- utičeš na opstanku i ostanku naših sela.
				</p>
				<p className="ZastoKupitiBolderText">
					Da nam sela ne bi opustela, biraj zdravo, lokalno, domaće!
				</p>
				<p>
					Naša hrana je naša velika tajna! Zašto tajna? Zato što kada
					stranci dođu u Srbiju oduševe se ukusom naše hrane! Zato što
					misle da dodajemo tajne sastojke. Donekle i jesu u pravu.
					Našu hranu spremaju naše majke i naše bake. Njihova ljubav
					je naš tajni sastojak! Uz ovaj tajni sastojak naša hrana ima
					i miris i ukus. Zašto ima i miris i ukus? Zato što je gaje i
					proizvode naše komšije, naši rođaci, na svojim okućnicama u
					našim selima! Naša hrana je naš adut, naša prednost! Kako i
					zašto prednost? Zato što smo gostoprimljivi, a imamo i sa
					čim! Mi smo na ovu našu prednost, našu hranu, navikli, ona
					nam je uobičajena, mi je ne vidimo, ali je vide, i osete
					drugi koji nam u goste dođu! Borba da sačuvamo našu prednost
					uveliko traje!
				</p>
				<p className="ZastoKupitiBolderText">Priključi se i ti!</p>
				<p>
					Vratimo se našim sortama i našim rasama, našoj zdravoj
					hrani, budimo autentični! Prestanimo da se stidimo svoga
					sela! Njime treba da se dičimo! Kada kupuješ, biraj lokalno
					i domaće.
				</p>
				<p>Podrži svoje selo, svoju zajednicu!</p>
				<p>
					Moja je želja da moja deca, i deca moje dece osete mirise i
					ukuse bakine kuhinje , naše domaće hrane!
				</p>
				<p
					style={{ fontStyle: "italic" }}
					className="ZastoKupitiBolderText"
				>
					Šta je tvoja želja?
				</p>
			</div>
		</div>
	);
};

export default ZastoKupiti;
