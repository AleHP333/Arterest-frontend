import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PostProduct from "./pages/postProduct/PostProduct";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/creation" element={<PostProduct />} />
          <Route path="/create" element={<CreateProduct />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
