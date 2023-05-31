import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';

function App(props) {
  return (
    <Container>
      <Row>
        <Col xs={6} ><Editor input={props.input} addInput={props.addInput} /></Col>
        <Col xs={6} ><Previewer input={props.input} /></Col>
      </Row>
    </Container>
  );
}

export default App;
