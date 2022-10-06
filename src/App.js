import "./app.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { unLogFromApp, verifyToken } from "./redux/actions/userSignActions";
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
import Dashboard from "./pages/Admin/views/Dashboard";
import AllArtWork from "./pages/Admin/views/AllArtWork";
import AllUsers from "./pages/Admin/views/AllUsers";
import EditProduct from "./pages/Admin/components/EditProduct";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./pages/Admin/components/ProductDetail";
import UserProfile from "./pages/UserProfile/UserProfile";
import Footer from "./pages/Footer/Footer";
import GiftCard from "./components/GiftCard/GiftCard";
import AllRequests from "./pages/Admin/views/AllRequests";
import Transaction from "./components/Transaction/Transaction";
import TransF from "./components/Transaction/TransF";


import Alert from "./components/Alert/Alert";
import Buy from "./components/Buy/Buy";
import ArtPost from "./pages/ArtRequest/ArtPost";
import SellRequests from "./pages/Admin/views/SellRequests";
import AllOrders from "./pages/Admin/views/AllOrders";
import ShoppingHistory from "./components/ShoppingHistory/ShoppingHistory";
import PasswordRecover from "./pages/PasswordRecover/PasswordRecover";
import SetPass from "./pages/PasswordRecover/SetPass";
import LastCheck from "./pages/Admin/views/NotChecked";
import CuatroOCuatro from "./pages/404/404"


function App() {
  const [added, setAdded] = useState(false);
  const [notAdded, setNotAdded] = useState(false);
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      dispatch(verifyToken(token))
        .then((res) => {
          if(res === "error"){
            dispatch(unLogFromApp())
          }
        });
    } else {
      dispatch(unLogFromApp());
    }
  }, []);

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

  const loggedUser = useSelector((store) => store.userSignReducer.userData);

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
          {loggedUser && loggedUser.isAdmin === true ? <>
            <Route exact path="/admin" element={<Dashboard />} />
            <Route exact path="/admin/artworks" element={<AllArtWork />} />
            <Route exact path="/admin/requests" element={<AllRequests />} />
            <Route exact path="/admin/sellRequests" element={<SellRequests />} />
            <Route exact path="/admin/allUnchecked" element={<LastCheck />} />
            <Route exact path="/admin/users" element={<AllUsers />} />
            <Route exact path="/admin/orders" element={<AllOrders />} />
            <Route exact path="/admin/editproduct/:id" element={<EditProduct />} />
            <Route exact path="/admin/artworks/artworkDetail/:id" element={<ProductDetail />} />
          </> : <Route path="/404" element={<CuatroOCuatro />} />}
          {loggedUser !== undefined ? 
          <>
            <Route exact path="/profile" element={<UserProfile />} />
            <Route exact path="/history" element={<ShoppingHistory />} />
          </> : <Route path="/404" element={<CuatroOCuatro />} />}
          {loggedUser && loggedUser.isArtist ? <Route exact path="/artist/artRequest" element={<ArtPost />}></Route> : <Route path="/404" element={<CuatroOCuatro />} />}
          <Route exact path="/passwordRecovery" element={<PasswordRecover />} />
          <Route exact path="/password/:token" element={<SetPass />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/verifyEmail/:id" element={<VerifyEmail />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route path="/giftcard" element={<GiftCard />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/fail" element={<TransF />} />
          <Route path="*" element={<CuatroOCuatro />} />

        </Routes>
        <Footer />
        <Alert></Alert>
      </Router>
    </>
  );
}
export default App;
