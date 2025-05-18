import image1 from "../../assets/HomeNews/homeNews1.jpg";
import image2 from "../../assets/HomeNews/homeNews2.jpg";
import image3 from "../../assets/HomeNews/homeNews3.jpg";
import image4 from "../../assets/HomeNews/homeNews4.jpg";

const HomeNews = () => {
	const NewsList = [
		{
			date: "19. Oct 2024",
			title: "Odrzan II 'Local food fest' 15.10.2024",
			newsImage: image1,
		},
		{
			date: "27. Feb 2023",
			title: "Zavrsna konferencija projekta 'Podrska lokalnom malom biznisu'",
			newsImage: image2,
		},
		{
			date: "16. Feb 2023",
			title: "Odrzan prvi 'Local food fest' 03.02.2023",
			newsImage: image3,
		},
		{
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
							<img src={el.newsImage} />
							<div className="HomeNewsTextDiv">
								<p>{el.date}</p>
								<h1>{el.title}</h1>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomeNews;
