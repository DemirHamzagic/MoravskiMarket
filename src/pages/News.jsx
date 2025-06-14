import "../styles/News.css";
import NewsImages from "../components/NewsImages";
import { useContext } from "react";
import { MyContext } from "../components/ContextFile";

const News = () => {
	window.scrollTo(0, 0);
	const { textColor, grayColor } = useContext(MyContext);
	return (
		<div className="NewsPageDiv">
			<p style={{ color: textColor }} className="pageTypeText">
				Naslovna - Novosti
			</p>
			<div className="newsInputDiv">
				<input
					style={{ backgroundColor: grayColor, color: textColor }}
					className="NewsSearchInput"
					placeholder="Pretraga..."
				/>
			</div>
			<p style={{ color: textColor }}>13 od 13</p>
			<NewsImages />
		</div>
	);
};
export default News;
