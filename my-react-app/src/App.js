import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <il>
                <Link to="/">Home</Link>
              </il>
              <p></p>
              <il>
                <Link to="/Contact">Contacto</Link>
              </il>
              <p></p>
              <il>
                <Link to="/Perfil">Perfil</Link>
              </il>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Perfil/:name" element={<Perfil />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
