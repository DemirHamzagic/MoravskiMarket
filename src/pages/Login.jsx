import "../styles/Login.css";
import { MyContext } from "../components/ContextFile";
import { useContext } from "react";

const Login = () => {
	const { mainColor, grayColor, textColor } = useContext(MyContext);

	return (
		<div style={{ backgroundColor: mainColor }} className="loginPageDiv">
			<p style={{ color: textColor }} className="pageTypeText">
				Naslovna - Nalog
			</p>
			<div className="loginBoxDiv">
				<form className="loginDiv">
					<h1 style={{ color: textColor }}>Ulogujte se</h1>
					<p style={{ color: textColor }}>Email:</p>
					<input
						style={{ color: textColor, backgroundColor: grayColor }}
						required
						className="loginEmailInput"
					/>
					<p style={{ color: textColor }}>Lozinka:</p>
					<input
						style={{ color: textColor, backgroundColor: grayColor }}
						required
						className="loginPasswordInput"
					/>
					<div style={{ color: textColor }}>
						<input type="checkbox" />
						<label>Zapamti me</label>
					</div>
					<button className="loginButton">Ulogujte se</button>
					<p style={{ color: textColor }} className="registerText">
						REGISTRUJTE SE
					</p>
					<p style={{ color: textColor }}>Zaboravili se lozinku?</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
