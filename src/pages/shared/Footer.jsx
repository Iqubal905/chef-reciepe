import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-5 bg-secondary text-light">
     
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={6} sm={12}>
            <h5>My Company</h5>
            <p>
            Masaharu Morimoto is a celebrity chef who has his own restaurant empire and a chef company. His company, Morimoto Management, provides culinary consulting services to businesses and individuals in the food industry. The company offers services such as 
            menu development, kitchen design, and staff training to help clients improve their culinary offerings and operations. 
            </p>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <div className="d-flex flex-column align-items-center">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <p>Email : masaharu@gmail.com </p>
                </li>
                <li>
                  <p>Phone : +26740932640985</p>
                </li>
                <li>
                  <p>Address : Road-235, State-North, Japan</p>
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
    
    </footer>
  );
}

export default Footer;
