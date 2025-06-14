import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
import image from "../assets/contactImage.jpg";
import { MyContext } from "../components/ContextFile";
import { useContext } from "react";

import "../styles/Contact.css";
const Contact = () => {
	window.scrollTo(0, 0);
	const { grayColor, textColor } = useContext(MyContext);

	return (
		<div className="ContactPageDiv">
			<p style={{ color: textColor }} className="pageTypeText">
				Naslovna - Kontakt
			</p>
			<div className="contactDiv">
				<div style={{ color: textColor }} className="contactAdressDiv">
					<h1 className="contactHeader">Adresa</h1>
					<div className="contactLocDiv">
						<CiLocationOn className="contactIcon" />
						<p>Bate Jankovića 48 32000 Čačak, Srbija</p>
					</div>
				</div>
				<div style={{ color: textColor }}>
					<h1 className="contactHeader">Kontakt</h1>
					<div className="contactFlexDiv">
						<CiMail className="contactIcon" />
						<p>moravskimarket@gmail.com</p>
					</div>
					<div className="contactFlexDiv">
						<LuPhone className="contactIcon" />
						<p>061 67 15 941</p>
					</div>
				</div>
				<div style={{ color: textColor }} className="contactSocialDiv">
					<h1 className="contactHeader">Pratite nas</h1>
					<p>
						<LuFacebook className="contactIcon" /> Facebook
					</p>
					<p>
						<FaInstagram className="contactIcon" /> Instagram
					</p>
					<p>
						<LuYoutube className="contactIcon" /> Youtube
					</p>
				</div>
				<div
					style={{ color: textColor }}
					className="contactWorkTimeDiv"
				>
					<h1 className="contactHeader">Radno vreme</h1>
					<p>
						<FaRegClock className="contactIcon" /> Radnim danom:
						08:00-17:00h Vikendom: Ne radimo
					</p>

					<h1 className="contactHeader">Podaci o firmi</h1>
				</div>
			</div>
			<div>
				<h1 style={{ color: textColor }}>
					Pišite nam, pristupite mreži uspešnih prodavaca...
				</h1>
				<form className="contactFormDiv">
					<div>
						<input
							style={{
								backgroundColor: grayColor,
								color: textColor,
							}}
							required
							placeholder="Ime"
						/>
						<input
							style={{
								backgroundColor: grayColor,
								color: textColor,
							}}
							required
							placeholder="Email"
						/>
					</div>
					<input
						style={{ backgroundColor: grayColor, color: textColor }}
						className="contactInput"
						required
						placeholder="Predmet"
					/>
					<input
						style={{ backgroundColor: grayColor, color: textColor }}
						className="contactMessageDiv"
						required
						placeholder="Poruka"
					/>
					<button className="contactFormButton">
						<IoPaperPlaneOutline /> Posaljite
					</button>
				</form>
				<img className="contactImage" src={image} />
			</div>
		</div>
	);
};

export default Contact;
