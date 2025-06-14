import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../ContextFile";

import image1 from "../../assets/HomeNews/homeNews1.jpg";
import image2 from "../../assets/HomeNews/homeNews2.jpg";
import image3 from "../../assets/HomeNews/homeNews3.jpg";
import image4 from "../../assets/HomeNews/homeNews4.jpg";

const HomeNews = () => {
	const { textColor, grayColor } = useContext(MyContext);
	const NewsList = [
		{
			vest: "1",
			date: "19. Oct 2024",
			title: "Odrzan II 'Local food fest' 15.10.2024",
			newsImage: image1,
		},
		{
			vest: "2",
			date: "27. Feb 2023",
			title: "Zavrsna konferencija projekta 'Podrska lokalnom malom biznisu'",
			newsImage: image2,
		},
		{
			vest: "3",
			date: "16. Feb 2023",
			title: "Odrzan prvi 'Local food fest' 03.02.2023",
			newsImage: image3,
		},
		{
			vest: "4",
			date: "04. Jan 2023",
			title: "Nase veliko otvaranje distributivnog centra",
			newsImage: image4,
		},
	];
	return (
		<div className="componentDiv5">
			<h1>Novosti</h1>
			<p>Budite u toku sa dešavanjima na Moravskom Marketu.</p>
			<div className="componentDiv5Box">
				{NewsList.map((el) => {
					return (
						<div className="HomeNewsDiv">
							<Link to={`/news/${el.vest}`}>
								<img src={el.newsImage} />
							</Link>
							<div
								style={{ backgroundColor: grayColor }}
								className="HomeNewsTextDiv"
							>
								<p>{el.date}</p>
								<Link
									className="homeNewsLink"
									to={`/news/${el.vest}`}
								>
									<h1 style={{ color: textColor }}>
										{el.title}
									</h1>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomeNews;
