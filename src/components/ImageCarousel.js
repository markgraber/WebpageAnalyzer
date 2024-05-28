import React from 'react';
import '../ImageCarousel.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const ImageCarousel = ({ images, baseUrl }) => {
  const getFullUrl = (src) => {
    if (src.startsWith('http')) {
      return src;
    }
    return `${baseUrl}${src.startsWith('/') ? '' : '/'}${src}`;
  };

  if (!images || images.length === 0) {
    return null; // Return null if there are no images
  }

  return (
    <Container>
      <Row>
        <Col className="mt-3 mt-sm-0 mb-4">
        <h2>List of All Images in a Carousel</h2>
          <Carousel defaultActiveIndex={0}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <div>{getFullUrl(image)}</div>
                <img className="d-block w-100" src={getFullUrl(image)} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageCarousel;
