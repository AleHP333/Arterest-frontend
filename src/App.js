import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PostProduct from "./pages/postProduct/PostProduct";
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
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
