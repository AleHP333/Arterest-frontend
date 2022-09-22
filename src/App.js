import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import { unLog, verifyToken } from "./redux/actions/userSignActions";
import { useSelector, useDispatch } from "react-redux";

//COMPONENTS//PAGES
import LandingPage from "./components/LandingPage/LandingPage";
import Faq from "./pages/FAQ/Faq";
import Terms from "./pages/Terms/Terms";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import ArtistProfile from "./pages/ArtistProfile/ArtistProfile";
import Favorites from "./components/Favorites/Favorites";
import { Home } from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail"



function App() {
  const [added, setAdded] = useState(false);
  const [notAdded, setNotAdded] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      dispatch(verifyToken(token));
    } else {
      dispatch(unLog())
    }
  }, []);

  const loggedUser = useSelector((store) => store.userSignReducer.userData);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAdded(false);
    setNotAdded(false);
  };
  const handleAdded = () => {
    setAdded(true);
  };
  const handleNotAdded = () => {
    setNotAdded(true);
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/creation" element={<CreateProduct />} />
          <Route
            path="/home"
            element={
              <Home handleAdded={handleAdded} handleNotAdded={handleNotAdded} />
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route exact path="/detail/:id" element={<DetailProduct />} />
          <Route path="/artistprofile/:userName" element={<ArtistProfile />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/verifyEmail/:id" element={<VerifyEmail />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
