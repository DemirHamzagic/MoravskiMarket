import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import DistirbutivniCentar from "./pages/DistirbutivniCentar";
import News from "./pages/News";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";

import { MyContext } from "./components/ContextFile";
import Companies from "./pages/Companies";
import Prodavnica from "./pages/Prodavnica";

const App = () => {
	return (
		<div className="rotDiv">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/aboutUs" element={<AboutUs />} />
				</Routes>
				<Routes>
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Routes>
					<Route
						path="/distributivni-centar"
						element={<DistirbutivniCentar />}
					/>
				</Routes>
				<Routes>
					<Route path="/novosti" element={<News />} />
				</Routes>
				<Routes>
					<Route path="/lista-zelja" element={<Wishlist />} />
				</Routes>
				<Routes>
					<Route path="/nalog" element={<Login />} />
				</Routes>
				<Routes>
					<Route path="/proizvodjaci" element={<Companies />} />
				</Routes>
				<Routes>
					<Route path="/prodavnica" element={<Prodavnica />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
