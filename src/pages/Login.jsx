import "../styles/Login.css";

const Login = () => {
	window.scrollTo(0, 0);
	return (
		<div className="loginPageDiv">
			<p className="pageTypeText">Naslovna - Nalog</p>
			<div className="loginBoxDiv">
				<form className="loginDiv">
					<h1>Ulogujte se</h1>
					<p>Email:</p>
					<input required className="loginEmailInput" />
					<p>Lozinka:</p>
					<input required className="loginPasswordInput" />
					<div>
						<input type="checkbox" />
						<label>Zapamti me</label>
					</div>
					<button className="loginButton">Ulogujte se</button>
					<p className="registerText">REGISTRUJTE SE</p>
					<p>Zaboravili se lozinku?</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
