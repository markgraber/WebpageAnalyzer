import React, { } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextAndImageAnalyzer from './components/TextAndImageAnalyzer';
import './App.css';

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
