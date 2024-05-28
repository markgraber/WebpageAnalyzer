import React, { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { htmlToText } from 'html-to-text';
import '../App.css'; // Ensure to import the CSS file

const UrlToContent = ({ setRenderedText, setImageUrls, setBaseUrl }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const getBaseUrl = (url) => {
    try {
      let modifiedUrl = url;
      if (!/^https?:\/\//i.test(modifiedUrl)) {
        modifiedUrl = `https://${modifiedUrl}`;
      }

      const urlObj = new URL(modifiedUrl);
      return `${urlObj.protocol}//${urlObj.hostname}`;
    } catch {
      return '';
    }
  };

  const fetchUrlContent = async () => {
    setError('');
    setRenderedText('');
    setImageUrls([]);
    try {
      let modifiedUrl = url;
      if (!/^https?:\/\//i.test(modifiedUrl)) {
        modifiedUrl = `https://${modifiedUrl}`;
      }

      const response = await fetch(`http://localhost:5001/fetch-url?url=${encodeURIComponent(modifiedUrl)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch the URL content');
      }
      const html = await response.text();

      // Extract plain text
      const plainText = htmlToText(html, {
        wordwrap: 130,
      });
      setRenderedText(plainText);

      // Extract image URLs
      const imageUrls = Array.from(html.matchAll(/<img[^>]+src="([^">]+)"/g), match => match[1]);
      setImageUrls(imageUrls);

      // Set base URL
      const baseUrl = getBaseUrl(url);
      setBaseUrl(baseUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetchUrlContent();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
        <Row>
            <Col xs={12}>
                <Form.Label htmlFor="webpageURL">Webpage URL</Form.Label>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={10}>
                <Form.Control
                    name="webpageURL"
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a URL for a given webpage (e.g. www.google.com)"
                />
            </Col>
            <Col xs={12} sm={2}>
                <Button type="submit" variant="primary" className="mt-3 mt-sm-0">Submit</Button>
            </Col>
        </Row>
        
        <Row>
            <Col xs={12} sm={10}>
                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            </Col>
        </Row>
    </Form>
  );
};

export default UrlToContent;
