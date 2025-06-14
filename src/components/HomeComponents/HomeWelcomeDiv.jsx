import { useContext } from "react";
import { MyContext } from "../ContextFile";

const HomeWelcomeDiv = () => {
	const { textColor } = useContext(MyContext);
	return (
		<div className="HomeWelcomeDiv">
			<h1 className="HomeWelcomeText">
				Dobrodošli u Moravski market - Oazu lokalnih proizvoda!
			</h1>
			<p style={{ color: textColor }}>
				Kod nas možete poručiti prehrambene i srodne proizvode lokalnih
				proizvođača, mikro, malih i srednjih preduzeća, preduzetnika i
				registrovanih poljoprivrednih gazdinstava sa područja Čačka,
				Gornjeg Milanovca i Lučana.
			</p>
			<p style={{ color: textColor }}>
				Mi smo Udruženje - partnerstvo za ruralni razvoj, a jedan od
				ciljeva nam je da na jednom mestu okupimo, predstavimo,
				promovišemo i unapredimo prodaju lokalnih proizvođača -
				prerađivača zdrave domaće hrane, da motivišemo sve nas kao deo
				lokalne zajednice, kako fizička, tako i pravna lica, da više
				kupujemo i konzumiramo zdrave lokalne i domaće proizvode i time
				utičemo na opstanak i razvoj naših lokalnih proizvođača zdrave
				domaće hrane.
			</p>
			<h2 style={{ color: textColor, fontStyle: "italic" }}>
				Podrži lokalno, podrži zdravo, podrži domaće!
			</h2>
		</div>
	);
};
export default HomeWelcomeDiv;
