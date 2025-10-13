import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projetos from './pages/Projetos';
import Home from './pages/Home';
import './App.css'

export default function App() {
 
    return(

      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projetos" element={<Projetos/>}/>
          </Routes>
        </div>
      </Router>
    );
}
