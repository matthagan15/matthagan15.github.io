
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import QcircuitBuilder from './components/QcircuitBuilder'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/QcircuitBuilder' element={<QcircuitBuilder />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>


  );
}


function About() {
  return <div><Navbar /><h2>About</h2></div>;
}


export default App;
