import image1 from "../assets/CompaniesPictures/companyPic1.jpg";
import image2 from "../assets/CompaniesPictures/companyPic2.png";
import image3 from "../assets/CompaniesPictures/companyPic3.png";
import image4 from "../assets/CompaniesPictures/companyPic4.jpg";
import image5 from "../assets/CompaniesPictures/companyPic5.jpg";
import image6 from "../assets/CompaniesPictures/companyPic6.jpg";
import image7 from "../assets/CompaniesPictures/companyPic7.jpg";
import image8 from "../assets/CompaniesPictures/companyPic8.jpg";
import image9 from "../assets/CompaniesPictures/companyPic9.png";
import image10 from "../assets/CompaniesPictures/companyPic10.jpg";
import image11 from "../assets/CompaniesPictures/companyPic11.png";
import image12 from "../assets/CompaniesPictures/companyPic12.jpg";
import image13 from "../assets/CompaniesPictures/companyPic13.jpg";
import image14 from "../assets/CompaniesPictures/companyPic14.png";
import image15 from "../assets/CompaniesPictures/companyPic15.jpg";
import image16 from "../assets/CompaniesPictures/companyPic16.jpg";
import image17 from "../assets/CompaniesPictures/companyPic17.png";
import image18 from "../assets/CompaniesPictures/companyPic18.jpg";
import image19 from "../assets/CompaniesPictures/companyPic19.jpg";
import image20 from "../assets/CompaniesPictures/companyPic20.png";
import image21 from "../assets/CompaniesPictures/companyPic21.png";

const CompaniesList = () => {
	const List = [
		{
			image: image1,
			title: "Ana Tomašević Preduzetnik Mešanje pića Eden Origin - Čačak",
			productNum: "(6)",
		},
		{
			image: image2,
			title: "Basna doo - Atenica",
			productNum: "(0)",
		},
		{
			image: image3,
			title: "CAT doo - Čačak",
			productNum: "(3)",
		},
		{
			image: image4,
			title: "Čeković SZR - Koštunići",
			productNum: "(7)",
		},
		{
			image: image5,
			title: "Danka's gotova jela - Guča",
			productNum: "(0)",
		},
		{
			image: image6,
			title: "Eko farma Moravka - Kalimanići",
			productNum: "(12)",
		},
		{
			image: image7,
			title: "Frigo Fenix - Čačak",
			productNum: "(0)",
		},
		{
			image: image8,
			title: "Grab doo - Koštunići",
			productNum: "(31)",
		},
		{
			image: image9,
			title: "ILIĆ PR Petar Ilić - Trbušani",
			productNum: "(0)",
		},
		{
			image: image10,
			title: "Kablarska kraljica DOO - Vrnčani",
			productNum: "(1)",
		},
		{
			image: image11,
			title: "LAG Srce Bačke",
			productNum: "(8)",
		},
		{
			image: image12,
			title: "Marina ružine latice SZR - Marina Sindžirević - Trbušani",
			productNum: "(0)",
		},
		{
			image: image13,
			title: "Nam nam suveniri PR Ana Tutunović - Čačak",
			productNum: "(32)",
		},
		{
			image: image14,
			title: "Panacea naturale PR Ivan Radović - Čačak",
			productNum: "(1)",
		},
		{
			image: image15,
			title: "Šilton papir pak szr - Vranići",
			productNum: "(9)",
		},
		{
			image: image16,
			title: "Simić voće plus - Gornje Crniljevo",
			productNum: "(21)",
		},
		{
			image: image17,
			title: "TGK Stari Beograd - Čačak",
			productNum: "(23)",
		},
		{
			image: image18,
			title: "Udruženje seoskih žena - Dragačevo",
			productNum: "(3)",
		},
		{
			image: image19,
			title: "Vazda dobar PR - Guča",
			productNum: "(6)",
		},
		{
			image: image20,
			title: "Zlatna padina PR Vladimir Ćurčić - Milatovići",
			productNum: "(5)",
		},
		{
			image: image21,
			title: "Žubor sa Kablara - PR Mladen Jovašević - Čačak",
			productNum: "(5)",
		},
	];
	return (
		<div className="companyPageDiv">
			<p className="pageTypeText">Naslovna - Proizvodjaci</p>
			<div className="companyInputDiv">
				<input className="companyInput" placeholder="Pretraga..." />
			</div>
			{List.map((el) => {
				return (
					<div className="companyLetterDiv">
						<h1 className="companyDivHeader">{el.title[0]}</h1>
						<div className="companyImageDiv">
							<img className="companyImage" src={el.image} />
							<p className="companyDivText1">{el.title}</p>
							<p className="companyDivText2">{el.productNum}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CompaniesList;
