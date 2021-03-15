import { useState } from "react";
import aptitudes from "./img/A.png";
import habilidades from "./img/H.png";
import estructuraOrganizativa from "./img/estructuraOrganizativa.png";
import estudiantes from "./img/estudiantes.png";
import materias from "./img/materias.png";
import metododeAprendizaje from "./img/metododeAprendizaje.png";
import personalAcademico from "./img/personalAcademico.png";
import secciones from "./img/secciones.png";
import Materiasview from "./components/Materias-view";
import "./App.css";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  return (
    <Router>
    <div className="app">
<header className="main-head">
      <nav className="head-nav">
        <ul className="menu">
          <li>
            <a href="#">
            <Link to="/materias">
              <img className="menu" src={materias}  alt="materias" />
              <span>MATERIAS</span></Link>
              </a>
          </li>
          <li>
            <a href="#">
              <img className="menu" src={habilidades}  alt="habilidades" />
              <span>HABILIDADES</span></a>
          </li>
          <li>
            <a href="#">
            <img className="menu" src={aptitudes}  alt="Aptitudes" />
              <span>APTITUDES</span></a>
          </li>
          <li>
            <a href="#">
            <img className="menu" src={metododeAprendizaje}  alt="metodode Aprendizaje" />
            <span>METODOS DEAPRENDIZAJE</span></a>
          </li>
          <li>
            <a href="#">
            <img className="menu" src={estructuraOrganizativa}  alt="estructura Organizativa" />
            <span>ESTRUCTURAS ORGANIZATIVAS</span></a>
          </li>
          <li>
            <a href="#">
            <img className="menu" src={estudiantes}  alt="estudiantes" />
            <span>ESTUDIANTES</span></a>
          </li>
          <li>
            <a href="#">
            <img className="menu" src={personalAcademico}  alt="personal academico" />
            <span>PERSONAL ACADEMICO</span></a>
          </li>
          <li>
            <a href="#">
            <img className="menu" src={secciones}  alt="secciones" />
            <span>SECCIONES</span></a>
          </li>
        </ul>
      </nav>
</header> 



<div className="wrap-all-the-things">


  <Switch>
    <Route path="/materias">
      <Materiasview />

    </Route>
  </Switch>
</div>
</div>
</Router>
  );
}

export default App;
