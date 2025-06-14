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
import ShopCategories from "./components/ShopCategories";
import KakoNaruciti from "./pages/helpPages/KakoNaruciti";
import NacinDostave from "./pages/helpPages/NacinDostave";
import NacinPlacanja from "./pages/helpPages/NacinPlacanja";
import PrivacePolicy from "./pages/helpPages/PrivacePolicy";
import ZastoKupiti from "./pages/helpPages/ZastoKupiti";
import BlogPage from "./components/BlogPage";
import { useContext } from "react";

const App = () => {
	const { mainColor } = useContext(MyContext);
	return (
		<div style={{ backgroundColor: mainColor }} className="rotDiv">
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
						path="/categorije/:category"
						element={<ShopCategories />}
					/>
					<Route
						path="/prodavnica/:id"
						element={<ProductDetails />}
					/>
					<Route path="/zasto-kupiti" element={<ZastoKupiti />} />
					<Route path="/kako-kupiti" element={<KakoNaruciti />} />
					<Route path="/nacin-dostave" element={<NacinDostave />} />
					<Route path="/nacin-placanja" element={<NacinPlacanja />} />
					<Route path="/privace-policy" element={<PrivacePolicy />} />
					<Route path="/news/:vest" element={<BlogPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
