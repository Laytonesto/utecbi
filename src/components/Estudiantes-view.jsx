import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'



function App() {
    const [name, setName] = useState("");
    return(
        <div className="body">
        <div className="title-chat">
            <h2>REGISTRO ESTUDIANTE - UTEC</h2>
        </div>
        <div className="content-chat">

            
        <Form>
  <Form.Row>
  <Col xs={8}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nombre Completo *</Form.Label>
    <Form.Control type="text" placeholder="Digite Nombre Estudiante" />
  </Form.Group>
  </Col>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genero *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Seleccione G.</option>
        <option>F</option>
        <option>M</option>
      </Form.Control>
    </Form.Group>

    </Form.Row>

    <Form.Row>
  <Col xs={4}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Telefono Fijo *</Form.Label>
    <Form.Control type="text" placeholder="Digite Telefono Fijo" />
  </Form.Group>
  </Col>

  <Col xs={4}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Telefono Movil *</Form.Label>
    <Form.Control type="text" placeholder="Digite Telefono Movil" />
  </Form.Group>
  </Col>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Estado Civil *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Seleccione E.</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form.Group>

    </Form.Row>

    <Form.Row>
  <Col xs={8}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email *</Form.Label>
    <Form.Control type="text" placeholder="Digite Email" />
  </Form.Group>
  </Col>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Fecha Nacimiento *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Seleccione F</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form.Group>

    </Form.Row>

    <Form.Row>
  <Form.Group as={Col} xs={7} controlId="formGridState">
      <Form.Label>Escuela *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Elija Escuela</option>
        <option>COORDINACION DE ADMINISTRACION Y FINANZAS</option>
      </Form.Control>

      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Catedra *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Elija Catedra</option>
        <option>CATEDRA DE FINANZAS</option>
      </Form.Control>
    </Form.Group>


    
  </Form.Row>

  <Form.Row>
  <Col>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Descripción</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Escriba Descripción" />
  </Form.Group>
  </Col>
  </Form.Row>

  <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Categoria</th>
      <th>Subcategoria</th>
      <th>Parent</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>sfsafdsad</td>
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
      <td>sfsafdsad</td>
    </tr>
    <tr>
      <td>3</td>
      <td>sfsafdsad</td>
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