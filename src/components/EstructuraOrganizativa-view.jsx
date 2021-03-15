import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'


function App() {
    const [name, setName] = useState("");
    return(
        <div className="body">
        <div className="title-chat">
            <h2>REGISTRO ESTRUCTURA ORGANIZATIVA - UTEC</h2>
        </div>
         <div className="content-chat">

            
        <Form>
  <Form.Row>
  <Col>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nombre Estructura *</Form.Label>
    <Form.Control type="text" placeholder="Digite Nombre Estructura" />
  </Form.Group>
  </Col>

    </Form.Row>

    <Form.Row>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Relación *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Elija Relación</option>
        <option>FACULTAD DE CIENCIAS EMPRESARIALES</option>
      </Form.Control>
    </Form.Group>

  </Form.Row>
<br></br>
<br></br>

  <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>#</th>
      <th>nombre</th>
      <th>Fecha</th>
      <th>Parent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
    </tr>
    <tr>
      <td>2</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
    </tr>
    <tr>
      <td>3</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
    </tr>
  </tbody>
</Table>

    
</Form>


        </div>
        </div>
    );
}

export default App;