import "../styles/BlogPage.css";
import { CiCalendar } from "react-icons/ci";
import News1 from "../assets/NewsImages/newsImage1.jpg";
import News2 from "../assets/NewsImages/newsImage2.jpg";
import News3 from "../assets/NewsImages/newsImage3.jpg";
import News4 from "../assets/NewsImages/newsImage4.jpg";
import { newsData } from "../data/NewsData";

import { Link, useParams } from "react-router-dom";

const BlogPage = () => {
	window.scrollTo(0, 0);
	const { vest } = useParams();
	const selectedNews = newsData.find((el) => el.vest === vest);
	console.log(newsData);
	const newsList = [
		{
			vest: "1",
			date: "19. Oct 2024 08:34",
			name: "Održan II 'Local food fest' 15.10.2024.",
			image: News1,
		},
		{
			vest: "2",
			date: "27. Feb 2023 12:28",
			name: "Završna konferencija projekta 'Podrška lokalnom malom biznisu'",
			image: News2,
		},
		{
			vest: "3",
			date: "16. Feb 2023 10:03",
			name: "Održan prvi 'Local food fest' 03.02.2023.",
			image: News3,
		},
		{
			vest: "4",
			date: "04. Jan 2023 11:59",
			name: "Naše veliko otvaranje distributivnog centra",
			image: News4,
		},
	];
	return (
		<div className="BlogPageDiv">
			<p>Naslovna - Blog - {selectedNews.name}</p>
			<div className="BlogNewsDiv">
				<div>
					<h1 className="BlogHeader">{selectedNews.name}</h1>
					<p className="BlogPageDateText">
						<CiCalendar /> {selectedNews.date}
					</p>
					<div className="BlogText">
						{/* <img className="BlogImage" src={image} />
						<p className="BlogPageText">
							U cilju očuvanja folklora i tradicije naše lepe
							Srbije i podizanja svesti o bitnosti kvaliteta
							života na selu posebno ženske populacije 15. oktobar
							je postao upravo datum koji će nositi obeležje o
							ovim "Nevidljivim heroinama Srbije" upravo kako je i
							nazvana međunarodna konferencija koja je održana
							istog dana kada i sajam u velikoj sali Doma kulture.
							Iskreno se nadamo da je ovo samo početak jedne nove
							ere koja će doneti pozitivne rezultate i da shvatimo
							koliko nam je selo važno i koliko je njegova uloga
							zaista velika u našim životima - opstanak! U cilju
							očuvanja folklora i tradicije naše lepe Srbije i
							podizanja svesti o bitnosti kvaliteta života na selu
							posebno ženske populacije 15. oktobar je postao
							upravo datum koji će nositi obeležje o ovim
							"Nevidljivim heroinama Srbije" upravo kako je i
							nazvana međunarodna konferencija koja je održana
							istog dana kada i sajam u velikoj sali Doma kulture.
							Iskreno se nadamo da je ovo samo početak jedne nove
							ere koja će doneti pozitivne rezultate i da shvatimo
							koliko nam je selo važno i koliko je njegova uloga
							zaista velika u našim životima - opstanak! U cilju
							očuvanja folklora i tradicije naše lepe Srbije i
							podizanja svesti o bitnosti kvaliteta života na selu
							posebno ženske populacije 15. oktobar je postao
							upravo datum koji će nositi obeležje o ovim
							"Nevidljivim heroinama Srb ije" upravo kako je i
							nazvana međunarodna konferencija koja je održana
							istog dana kada i sajam u velikoj sali Doma kulture.
							Iskreno se nadamo da je ovo samo početak jedne nove
							ere koja će doneti pozitivne rezultate i da shvatimo
							koliko nam je selo važno i koliko je njegova uloga
							zaista velika u našim životima - opstanak!
						</p> */}
						<div className="BlogText">
							{Object.keys(selectedNews)
								.filter((key) => key.startsWith("text"))
								.map((textKey) => {
									const index = textKey.replace("text", "");
									const imageKey = "image" + index;
									const text = selectedNews[textKey];
									const image = selectedNews[imageKey];

									return (
										<div
											key={textKey}
											className="BlogTextBlock"
										>
											{image && (
												<img
													className="BlogImage"
													src={image}
												/>
											)}
											<p className="BlogPageText">
												{text}
											</p>
										</div>
									);
								})}
						</div>
					</div>
				</div>
				<div className="BlogPostNewsContainer">
					<h1 className="BlogPostNewsHeader">Poslednje novosti</h1>
					{newsList.map((el) => {
						return (
							<div className="BlogPostNewsDiv">
								<Link to={`/news/${el.vest}`}>
									<img
										className="BlogPostNewsImage"
										src={el.image}
									/>
								</Link>
								<div className="BlogPostNewsText">
									<p className="postDateText">
										<CiCalendar className="dateIcon" />
										{el.date}
									</p>
									<Link
										style={{ textDecoration: "none" }}
										to={`/news/${el.vest}`}
									>
										<h1 className="postNameText">
											{el.name}
										</h1>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
