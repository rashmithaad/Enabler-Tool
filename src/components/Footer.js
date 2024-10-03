import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-2">
      <Container>
        <Row>
          <Col className="text-center">
            &copy; 2024 @cattain.in. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
