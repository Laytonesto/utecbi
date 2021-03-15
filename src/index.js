import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';

/** RUTAS */
import Materias_view from "./components/Materias-view";
import Aptitudes_view from "./components/Aptitudes-view";
import Estudiantes_view from "./components/Estudiantes-view";
import EstructuraOrganizativa_view from "./components/EstructuraOrganizativa-view";
import MetodosAprendizaje_view from "./components/MetodosAprendizaje-view";
import PersonalAcademico_view from "./components/PersonalAcademico-view";
import Secciones_view from "./components/Secciones-view";
import Habilidades_view from "./components/Habilidades-view";
import Report_view from "./components/Report-view";
import Footer_view from "./components/footer-view";
import Menu_view from "./components/Menu";
import Login_view from "./login";
/** CSS  */
import "./App.scss";



ReactDOM.render(
    
<Router>

<div className="app">
<Switch>
<Route path="/admin">
<Menu_view />

</Route>
<Route path="/">
<Login_view />
</Route>
</Switch>

<Route path="/admin/">

<div className="wrap-all-the-things">

<Route path="/admin/" exact>
<Materias_view />

</Route>
<Route path="/admin/estructura_organizativa">
<EstructuraOrganizativa_view />



</Route>

<Route path="/admin/estudiantes">
<Estudiantes_view />

</Route>

<Route path="/admin/habilidades">
<Habilidades_view />

</Route>

<Route path="/admin/metodos_aprendizaje">
<MetodosAprendizaje_view />

</Route>

<Route path="/admin/personal_academico">
<PersonalAcademico_view />

</Route>

<Route path="/admin/secciones">
<Secciones_view />

</Route>

<Route path="/admin/aptitudes">
<Aptitudes_view />

</Route>

<Route path="/admin/report">
<Report_view />

</Route>

<Footer_view />

</div>
</Route>

</div>




</Router>, document.getElementById("root"));



