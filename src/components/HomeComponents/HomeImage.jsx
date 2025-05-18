import "../../styles/Home.css";
const HomeImage = ({ homeImage, headerText, infoText }) => {
	return (
		<div className="homeImageDiv">
			<img src={homeImage} />
			<div className="homeImageTextBox">
				<h1>{headerText}</h1>
				<div className="homeBoxText">
					<p>{infoText}</p>
					<span>Saznaj vise →</span>
				</div>
			</div>
		</div>
	);
};

export default HomeImage;
