import { useState } from "react";


function App() {
    const [name, setName] = useState("");
    return(
        <div className="footer">
            <h6>SISTEMA DE SEGUIMIENTO INDIVIDUALIZADO PARA<br></br>
            EDUCACIÓN SUPERIOR EN UNIVERSIDAD TECNOLÓGICA DE EL SALVADOR  </h6>
            <a>Universidad Tecnológica de El Salvador - Derechos Reservados 2021</a>
        </div>
    );
}

export default App;