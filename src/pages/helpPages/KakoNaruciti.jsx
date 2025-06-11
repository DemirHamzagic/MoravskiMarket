import "../../styles/helpPages/KakoNaruciti.css";

const KakoNaruciti = () => {
	window.scrollTo(0, 0);
	return (
		<div className="KakoNarucitiPageDiv">
			<p className="pageTypeText">Naslovna - Kako kupiti?</p>
			<h1 className="KakoNarucitiHeader">
				Kako napraviti porudžbinu, kupiti proizvod?
			</h1>
			<div>
				<h1 className="KakoNarucitiBigText">IZABERITE PROIZVOD</h1>
				<p>
					Prvi korak je odabir proizvoda. U glavnom meniju, u sekciji
					Proizvodi, nalazi se asortiman svih proizvoda koje možete
					kupiti u našem shop-u. Proizvodi su grupisani u odgovarajuće
					kategorije, a svaka od glavnih kategorija sadrži određeni
					broj podkategorija. Kliknite na željeni proizvod, i dobićete
					podatke o istom.
				</p>
				<p>
					Ukoliko niste sigurni u kojoj kategoriji se nalazi proizvod
					koji tražite, možete iskoristiti polje za pretragu. U polje
					za pretragu ukucajte ime traženog proizvoda i pritisnite
					ENTER. U toku samog kucanja u polju za pretragu,
					pojavljivaće Vam se sugestije, koje mogu da Vam pomognu pri
					pretrazi. Kada pronađete proizvod koji želite da naručite,
					kliknite na njegovu sličicu ili naziv kako bi ste ušli na
					stranu sa detaljnim prikazom.
				</p>
				<h1 className="KakoNarucitiBigText">
					DODAVANJE PROIZVODA U KORPU
				</h1>
				<p>
					Odabirom dugmeta <span>Dodaj u korpu</span> proizvod će biti
					memorisan na Vašem nalogu. Nakon ovoga će Vam se prikazati
					sadržaj Vaše korpe. Postupak ubacivanja proizvoda u korpu
					možete ponavljati sve dok ne naručite sve što želite klikom
					na dugme
					<span> Nastavi kupovinu</span>.
				</p>
				<p>
					U svakom trenutku možete pogledati sadržaj svoje korpe
					klikom na istu na vrhu stranice ili u toku samog procesa
					poručivanja nakon odabira nekog proizvoda. Pregledom
					sadržaja možete vršiti i određene izmene ukoliko želite.
				</p>
				<p>
					Ukoliko želite neku drugu količinu određenog artikla,
					dovoljno je samo da u polju <span>Količina</span> uz taj
					proizvod ukucate željeni broj i kliknete na dugme
					<span> Izmeni</span>. Količina, a samim tim i iznos će se
					automatski promeniti. Klikom na dugme
					<span> Izbriši</span> pojedinačni artikl možete izbaciti iz
					svoje korpe.
				</p>
				<h1 className="KakoNarucitiBigText">
					PORUČIVANJE PROIZVODA IZ KORPE
				</h1>
				<p>
					Kada ste odabrali proizvode koje želite da kupite i smestili
					ih u korpu, prelazite na sledeći korak klikom na dugme
					<span> Nastavite ka kupovini</span> pre toga, ukoliko imate
					kod za popust, unesite ga u polje <span>Promo kod</span> i
					potvrdite klikom na dugme. U sledećem koraku je neophodno da
					nam ostavite Vaše osnovne podatke, kako bi smo znali kome i
					gde da pošaljemo poručene proizvode. Na ovom mestu će vam se
					otvoriti formular koji je potrebno da popunite.
				</p>
				<h1 className="KakoNarucitiBigText">ZAVRŠETAK PORUČIVANJA</h1>
				<p>
					Poslednji korak u Vašoj porudžbini je klik na dugme{" "}
					<span>Pošalji porudžbinu</span>. Na Vašu e-mail adresu koju
					ste prethodno naveli, biće poslat e-mail sa svim detaljima
					porudžbine. U okviru e-maila nalazi se i potvrda o
					porudžbini, zajedno sa njenim detaljima i linkom za praćenje
					njenog progresa.
				</p>
			</div>
		</div>
	);
};

export default KakoNaruciti;
