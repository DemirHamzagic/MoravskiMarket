import slika1 from "../assets/NewsImages/newsImage1.jpg";
import slika2 from "../assets/NewsImages/newsImage2.jpg";
import slika3 from "../assets/NewsImages/newsImage3.jpg";
import slika4 from "../assets/NewsImages/newsImage4.jpg";

import { CiCalendar } from "react-icons/ci";
const NewsImages = () => {
	const NewsList = [
		{
			date: "19. Oct 2024",
			title1: "Odrzan II 'Local food fest' 15.10.2024",
			title2: "15. oktobra je uspešno održan festival lokalne hrane po drugi put ispred kulturnog centra u Čačku.",
			newsImage: slika1,
		},
		{
			date: "27. Feb 2023",
			title1: "Zavrsna konferencija projekta 'Podrska lokalnom malom biznisu'",
			title2: "Projekat ja ušao u svoju završnu fazu i sada je vreme za postavljanje novih zadataka i ciljeva. Kako je izgledala poslednja projektna aktivnost virnite ovde detaljnije...",
			newsImage: slika2,
		},
		{
			date: "16. Feb 2023",
			title1: "Odrzan prvi 'Local food fest' 03.02.2023",
			title2: "U Čačku u okviru projektra 'Podrška lokalnom malom biznisu' održan je prvi sajam lokalne hrane.",
			newsImage: slika3,
		},
		{
			date: "04. Jan 2023",
			title1: "Nase veliko otvaranje distirbutivnog centra",
			title2: "27.12.2022. godine u 11:00h svečanim sečenjem vrpce otvoren je naš distributivni centar.",
			newsImage: slika4,
		},
	];
	return (
		<div className="newsBoxDiv">
			{NewsList.map((el) => {
				return (
					<div className="newsDiv">
						<img src={el.newsImage} />
						<div className="newsTextDiv">
							<p>
								<CiCalendar /> {el.date}
							</p>
							<h1>{el.title1}</h1>
							<p>{el.title2}</p>
							<p className="newsMoreText">Detaljnije →</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default NewsImages;
