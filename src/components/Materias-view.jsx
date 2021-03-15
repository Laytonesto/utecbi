import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function App() {
    const [name, setName] = useState("");
    return(
        <div className="body">
        <div className="title-chat">
        <h2>REGISTRO MATERIA - UTEC</h2>

            </div> 
        <div className="content-chat">

            
        <Form>
  <Form.Row>
  <Col xs={8}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nombre Materia</Form.Label>
    <Form.Control type="text" placeholder="Digite Materia" />
  </Form.Group>
  </Col>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Tipo Materia *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Vitual</option>
        <option>Presencial</option>
        <option>Semipresencial</option>
      </Form.Control>
    </Form.Group>
    </Form.Row>

    <Form.Row>
  <Form.Group as={Col} xs={8} controlId="formGridState">
      <Form.Label>Escuela *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Elija Escuela</option>
        <option>COORDINACION DE ADMINISTRACION Y FINANZAS</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>


  <Form.Row>
  <Form.Group as={Col} xs={8} controlId="formGridState">
      <Form.Label>Catedra *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Elija Catedra</option>
        <option>CATEDRA DE FINANZAS</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>#</th>
      <th>Materia</th>
      <th>Tipo Materia</th>
      <th>Escuela</th>
      <th>Catedra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
    </tr>
    <tr>
      <td>2</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
      <td>sfsafdsad</td>
    </tr>
    <tr>
      <td>3</td>
      <td>sfsafdsad</td>
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