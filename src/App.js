import React, { } from 'react';
import './App.css';
import TextAndImageAnalyzer from './components/TextAndImageAnalyzer';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="webpage-analyzer-react-app">
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Count Words And Get Images From A Webpage</h1>
          </Col>
        </Row>
      </Container>
      <TextAndImageAnalyzer />
    </div>
  );
}

export default App;
