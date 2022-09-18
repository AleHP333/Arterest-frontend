import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PostProduct from "./pages/postProduct/PostProduct";
import Faq from "./pages/FAQ/Faq";
import Terms from "./pages/Terms/Terms";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import ArtistProfile from "./pages/ArtistProfile/ArtistProfile";

import { Home } from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/creation" element={<CreateProduct />} />
          <Route path="/home" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route exact path="/detail/:id" element={<DetailProduct />} />
          <Route path="/artistprofile/:userName" element={<ArtistProfile />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
