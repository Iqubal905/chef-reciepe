import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-5">
      <div>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <h5>My Company</h5>
            <p>
              A short description of my company.             </p>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <div className="d-flex flex-column align-items-end">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email</a>
                </li>
                <li>
                  <a href="#!">Phone</a>
                </li>
                <li>
                  <a href="#!">Address</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
