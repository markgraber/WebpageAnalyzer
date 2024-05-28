import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import '../App.css'; // Ensure to import the CSS file

const WordCountTable = ({ text }) => {
  const [wordCounts, setWordCounts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'count', direction: 'descending' });

  useEffect(() => {
    const countWords = (text) => {
      const words = text.toLowerCase().match(/\b(\w+)\b/g);
      const wordMap = words.reduce((map, word) => {
        map[word] = (map[word] || 0) + 1;
        return map;
      }, {});
      const wordArray = Object.keys(wordMap).map(word => ({ word, count: wordMap[word] }));
      return wordArray.sort((a, b) => b.count - a.count).slice(0, 7);
    };

    if (text) {
      setWordCounts(countWords(text));
    } else {
      setWordCounts([]);
    }
  }, [text]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedWordCounts = [...wordCounts].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  if (!text || text.length === 0) {
    return null; // Return null if there are no images
  }

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} className="mt-3">
          <h2>Total Word Count: {text.split(/\s+/).length}</h2>
        </Col>
        <Col sm={6} className="mt-3 d-none d-sm-block">
          <h2><Form.Label htmlFor="webpageText">Webpage Text</Form.Label></h2>
        </Col>
        <Col xs={12} sm={6}>
          <Table striped bordered hover className="table-sortable">
            <thead>
              <tr>
                <th>#</th>
                <th className="sortable" onClick={() => requestSort('word')} style={{ cursor: 'pointer' }}>Word</th>
                <th className="sortable" onClick={() => requestSort('count')} style={{ cursor: 'pointer' }}>Count</th>
              </tr>
            </thead>
            <tbody>
              {sortedWordCounts.map((wordCount, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{wordCount.word}</td>
                  <td>{wordCount.count}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={12} className="d-block d-sm-none">
          <h2><Form.Label htmlFor="webpageText">Webpage Text</Form.Label></h2>
        </Col>
        <Col xs={12} sm={6}>
            <Form.Control
              name="webpageText"
              as="textarea"
              rows={13}
              value={text}
              readOnly
            />
        </Col>
      </Row>
    </Container>
  );
};

export default WordCountTable;
