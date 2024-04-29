import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from './pages/start';
import Busanfrage from "./pages/busamfrage";
import Leistungen from "./pages/leistungen";
import logo from './images/Logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
        <header className="App-header">
        <div className='Container'>
          <img src={logo} className='logo' alt='logo' />
          <div className="text">
      
          <i class="bi bi-envelope-fill"></i>&nbsp;
            <p>info@mietbus24.com</p>&nbsp;
            <i class="bi bi-telephone-fill"></i>&nbsp;
            <p>040 - 555 02 999 0</p>&nbsp;
          </div>
        </div>
        <div className='Menu'>
          <nav>
            <ul>
              <li><Link to="/">Start</Link></li>
              <li><Link to="/Busanfrage">Busanfrage</Link></li>
              <li><Link to="/leistungen">Leistungen</Link></li>
              <li><Link to="/Uber">Uber uns</Link></li>
              <li><Link to="/FAQ">FAQ</Link></li>
              <li><Link to="/Kontakt">Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/busanfrage">busanfrage</Link>
          </li>
          <li>
            <Link to="/leistungen">leistungen</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/busanfrage" element={<Busanfrage />} />
        <Route path="/leistungen" element={<Leistungen />} />
      </Routes>
      <div id='subfooter'>
        <div className='footerone'>
          <p>Copyright © 2014 mietbus24</p>
          <div id='left'>
            <p>Busanfrage · Kontakt · FAQ · AGB · Impressum</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
