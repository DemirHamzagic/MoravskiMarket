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
import ProductDetails from "./components/ProductDetails";

const App = () => {
	return (
		<div className="rotDiv">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutUs" element={<AboutUs />} />
					<Route path="/contact" element={<Contact />} />
					<Route
						path="/distributivni-centar"
						element={<DistirbutivniCentar />}
					/>
					<Route path="/novosti" element={<News />} />
					<Route path="/lista-zelja" element={<Wishlist />} />
					<Route path="/nalog" element={<Login />} />
					<Route path="/proizvodjaci" element={<Companies />} />
					<Route path="/prodavnica" element={<Prodavnica />} />

					<Route
						path="/prodavnica/:id"
						element={<ProductDetails />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
