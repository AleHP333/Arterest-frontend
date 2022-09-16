import './app.css'
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import PostProduct from './pages/postProduct/PostProduct';
import DetailProduct from './components/DetailProduct/DetailProduct';


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/creation" element={<PostProduct />} />
          <Route exact path ="/detail/:id" element={<DetailProduct/>} />
        

        </Routes>
      </Router>
    </>
  );
}
export default App;