import { useState } from "react";
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
/**IMG */
import aptitudes from "./../img/A.png";
import habilidades from "./../img/H.png";
import estructuraOrganizativa from "./../img/estructuraOrganizativa.png";
import estudiantes from "./../img/estudiantes.png";
import materias from "./../img/materias.png";
import metododeAprendizaje from "./../img/metododeAprendizaje.png";
import personalAcademico from "./../img/personalAcademico.png";
import secciones from "./../img/secciones.png";
import reportes from "./../img/graph.png";


function App() {
    const [name, setName] = useState("");
    return(
        <header className="main-head">
  <nav className="head-nav">
    <ul className="menu">
      <li>
        <Link to="/admin/">
          <img className="menu" src={materias}  alt="materias" />
          <span>MATERIAS</span></Link>
      </li>
      <li>
        <Link to="/admin/habilidades">
          <img className="menu" src={habilidades}  alt="habilidades" />
          <span>HABILIDADES</span></Link>
      </li>
      <li>
        <Link to="/admin/aptitudes">
        <img className="menu" src={aptitudes}  alt="Aptitudes" />
          <span>APTITUDES</span></Link>
      </li>
      <li>
      <Link to="/admin/metodos_aprendizaje">
        <img className="menu" src={metododeAprendizaje}  alt="metodode Aprendizaje" />
        <span>METODOS DE APRENDIZAJE</span></Link>
      </li>
      <li>
      <Link to="/admin/estructura_organizativa">
        <img className="menu" src={estructuraOrganizativa}  alt="estructura Organizativa" />
        <span>ESTRUCTURAS ORGANIZATIVAS</span></Link>
      </li>
      <li>
      <Link to="/admin/estudiantes">
        <img className="menu" src={estudiantes}  alt="estudiantes" />
        <span>ESTUDIANTES</span></Link>
      </li>
      <li>
      <Link to="/admin/personal_academico">
        <img className="menu" src={personalAcademico}  alt="personal academico" />
        <span>PERSONAL ACADEMICO</span></Link>
      </li>
      <li>
      <Link to="/admin/secciones">
        <img className="menu" src={secciones}  alt="secciones" />
        <span>SECCIONES</span></Link>
      </li>
      <li>
      <Link to="/admin/report">
        <img className="menu" src={reportes}  alt="reportes" />
        <span>REPORTES</span></Link>
      </li>
    </ul>
  </nav>
</header> 
    );
}

export default App;