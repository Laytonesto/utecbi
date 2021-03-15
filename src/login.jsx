import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';


import "./login.scss";




function App() {
    const [name, setName] = useState("");

    const onLoginFormSubmit = (e) => {
        alert("You are submitting ");
      };
  
    return(
        <div className="body-login">
            <div className="center">
    <Form onSubmit={onLoginFormSubmit}>
      <Form.Label>Account Login</Form.Label>

  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      Email
    </Form.Label>
    <Col sm={9}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={3}>
      Password
    </Form.Label>
    <Col sm={9}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 4 }}>
    <Link to="/admin/">
      <Button type="submit">Sign in</Button>
      </Link>
    </Col>
  </Form.Group>
</Form>
</div>
        </div>
    );
}

export default App;