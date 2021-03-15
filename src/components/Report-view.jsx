import { useState } from "react";
import Iframe from 'react-iframe'


function App() {
    const [name, setName] = useState("");
    return(
        <div className="body">
        <div className="title-chat-2">
            <h2>REPORTES - UTEC</h2>
            
        </div>
        <div className="content-chat-2">
        <Iframe url="https://datastudio.google.com/embed/reporting/47d8125f-6dd2-40b0-87a4-d5f5bd812dda/page/acV5B"
        width="100%"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
        </div>
    );
}

export default App;