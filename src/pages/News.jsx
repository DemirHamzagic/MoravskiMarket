import "../styles/News.css";
import NewsImages from "../components/NewsImages";

const News = () => {
	window.scrollTo(0, 0);
	return (
		<div className="NewsPageDiv">
			<p className="pageTypeText">Naslovna - Novosti</p>
			<div className="newsInputDiv">
				<input className="NewsSearchInput" placeholder="Pretraga..." />
			</div>
			<p>13 od 13</p>
			<NewsImages />
		</div>
	);
};
export default News;
