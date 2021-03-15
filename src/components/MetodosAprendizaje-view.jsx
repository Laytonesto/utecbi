import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'


function App() {
    const [name, setName] = useState("");
    return(
        <div className="body">
        <div className="title-chat">
            <h2>REGISTRO METODO DE APRENDIZAJE - UTEC</h2>
        </div>
        <div className="content-chat">

            
        <Form>
  <Form.Row>
  <Col xs={8}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nombre Metodo *</Form.Label>
    <Form.Control type="text" placeholder="Digite Metodo de Aprendizaje" />
  </Form.Group>
  </Col>

    </Form.Row>

    <Form.Row>
  <Col xs={7}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Categoria *</Form.Label>
    <Form.Control type="text" placeholder="Digite Categoria" />
  </Form.Group>
  </Col>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Percepción *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Tipo</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Procesamiento *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Tipo</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form.Group>

    </Form.Row>

    <Form.Row>
  <Col xs={7}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Subcategoria *</Form.Label>
    <Form.Control type="text" placeholder="Digite Subcategoria" />
  </Form.Group>
  </Col>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Representación *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Tipo</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Comprensión *</Form.Label>
      <Form.Control as="select" defaultValue="Tipo">
        <option>Tipo</option>
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