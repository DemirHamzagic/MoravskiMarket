import "../styles/AboutUs.css";

const AboutUs = () => {
	window.scrollTo(0, 0);
	return (
		<div className="aboutUsDiv">
			<p className="pageTypeText">Naslovna - o nama</p>
			<div className="aboutHeadDiv">
				<h1 className="orangeAboutText">O nama</h1>
				<p>Moravski market, misija i ciljevi...</p>
			</div>
			<h1>Mi smo Moravski market!</h1>
			<h1 className="orangeAboutText">
				Oaza zdravih lokalnih i domaćih proizvoda
			</h1>
			<p className="aboutUsText">
				Kod nas možete poručiti prehrambene i srodne proizvode lokalnih
				proizvođača, mikro, malih i srednjih preduzeća, preduzetnika i
				registrovanih poljoprivrednih gazdinstava sa područja Čačka,
				Gornjeg Milanovca i Lučana.
			</p>
			<p className="aboutUsText">
				Mi smo Udruženje/ partnerstvo za ruralni razvoj Lokalna akciona
				grupa Čačak - Gornji Milanovac, nestranačka, nevladina,
				neprofitna organizacija osnovana 2019. -te godine u skladu sa
				LEADER pristupom ruralnog razvoja, odozdo na gore, kao
				međuopštinsko (deo grada Čačka i deo opštine Gornji Milanovac) i
				multisektorsko (osnivači su predstavnici civilnog, javnog i
				privatnog sektora) partnerstvo. Kroz ovaj pristup, odnosno
				partnerstvo, Lokalnu akcionu grupu, cilj je da se povežu
				zainteresovani iz različitih oblasti / sektora, kako bi
				kandidovali i sprovodili projekte ruralnog razvoja, odnosno
				poboljšanja kvaliteta života na seoskom području koje pokriva
				Udruženje.
			</p>
			<p className="aboutUsText">
				Mi Udruženje vidimo kao alat kojim ćemo pokušati da damo
				doprinos zaustavljanju propadanja sela na našem području kroz
				povezivanje, umrežavanje, promociju i osmišljavanje proizvoda
				(prehrambenih, turističkih, domaće radinosti itd.), promociju
				manifestacija, lokalne tradicije i kulture, lokalnih proizvoda,
				destinacija i raznih drugih aktivnosti, uvođenja inovacija,
				digitalizacije, zelene ekonomije, obnovljivih izvora energije i
				energetske efikasnosti, razvoja infrastrukture, kooperativa i
				zadruga, skraćivanja puta hrane od njive do trpeze i sl.
			</p>
			<p className="aboutUsText">
				Osnivači Udruženja su predstavnici Agronomskog fakulteta u
				Čačku, Instituta za voćarstvo iz Čačka, javnih komunalnih
				preduzeća, obrazovnih institucija, zemljoradničkih zadruga,
				ugostiteljskih i turističkih objekata, udruženja, mikro, malih i
				srednjih preduzeća , preduzetnika i registrovanih
				poljoprivrednih gazdinstava, koji se bave preradom voća, povrća
				i drugim aktivnostima na seoskom području.
			</p>
			<p className="aboutUsText">
				Svrha Moravskog marketa je da na jednom mestu okupimo,
				predstavimo, promovišemo i unapredimo prodaju lokalnih
				proizvođača/prerađivača zdrave domaće hrane, kao i da motivišemo
				sve nas kao deo lokalne zajednice, kako fizička, tako i pravna
				lica, da više kupujemo i konzumiramo zdrave lokalne i domaće
				proizvode i time utičemo na opstanak i razvoj naših lokalnih
				proizvođača zdrave domaće hrane i time pozitivno utičemo na
				razvijanje privrednih aktivnosti, pre svega proizvodnje hrane na
				našim selima, a samim tim i na njihov opstanak i razvoj.
			</p>
			<p className="aboutUsText">
				Više o našim aktivnostima možete videti na našem web portalu{" "}
				<span className="aboutLinkText">www.lokalno.org</span>
			</p>
		</div>
	);
};

export default AboutUs;
