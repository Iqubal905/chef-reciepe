import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    
    return (
        <div>
           <Container>
            <Row>
                <Col>
                  <h4>1 : What is the difference between uncontrolled and controlled components?</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                  <h4>2 : How to validate React Props using Prop type?</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                  <h4>3 : What is the difference between nodejs and express js?</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                  <h4>4 : What is the custom hook, and why will yuu create a custom hook?</h4>
                </Col>
            </Row>
           </Container>
           
        </div>
    );
};

export default Blog;