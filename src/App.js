import './App.css';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'




function App() {
  return (
    <Router>
       <Routes>

        <Route exact path="/" element={<LandingPage/>}/>
        
      
       

         </Routes>
    </Router>
  );
}
export default App;