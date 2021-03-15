import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'



function App() {
    const [name, setName] = useState("");
    return(
        <div className="body">
        <div className="title-chat">
            <h2>REGISTRO SECCION - UTEC</h2>
        </div>
         <div className="content-chat">

            
        <Form>
  <Form.Row>
  <Col >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Materia *</Form.Label>
    <Form.Control as="select" defaultValue="Tipo">
        <option>Seleccione Materia</option>
        <option>1</option>
        <option>2</option>
      </Form.Control>
  </Form.Group>
  </Col>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Año *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Seleccione Año</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>

    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Ciclo *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Seleccione Ciclo</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form.Group>

    </Form.Row>



    <Form.Row>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Docente *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Seleccione Docente</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>

    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Seleccione Estructura Organizativa *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Elija Departamento</option>
        <option>ESCUELA DE INFORMATICA</option>
      </Form.Control>
    </Form.Group>

    </Form.Row>


    <Form.Row>
  <Col xs={6}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Alumnos</Form.Label>
  </Form.Group>
  </Col>

  <Form.Group as={Col} controlId="formGridState">
  <Form.File 
    id="custom-file-translate-scss"
    label="Filtro"
    lang="es"
    custom
  />
    </Form.Group>

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