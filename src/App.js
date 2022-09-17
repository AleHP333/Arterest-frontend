import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PostProduct from "./pages/postProduct/PostProduct";
import Faq from "./pages/FAQ/Faq";
import Terms from "./pages/Terms/Terms";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

import { Home } from "./components/Home/Home";
import CreateProduct from "./components/CreateProduct/CreateProduct.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/creation" element={<PostProduct />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
