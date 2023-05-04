import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Picture.css'
import food1 from '../../assets/food-1.jpg'
import food2 from '../../assets/food-2.jpg'
import food3 from '../../assets/food-3.jpg'
import food4 from '../../assets/food-4.jpg'
import food5 from '../../assets/food-5.jpg'
import food6 from '../../assets/food-6.jpg'
import food7 from '../../assets/food-7.jpg'
import food8 from '../../assets/food-8.jpg'
import food9 from '../../assets/food-9.jpg'
import food10 from '../../assets/food-10.jpg'
import food11 from '../../assets/food-11.jpg'
import food12 from '../../assets/food-12.jpg'
const Picture = () => {
    return (
        <div>
             <Container>


              <h2 className=' pt-4 pb-2'> Favourite Foods of Japan</h2>  
      <Row>
        <Col sm={6} md={4}>
        <img src={food1}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food2}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food3}></img>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
        <img src={food4}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food5}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food6}></img>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
        <img src={food7}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food8}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food9}></img>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
        <img src={food10}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food11}></img>
        </Col>
        <Col sm={6} md={4}>
        <img src={food12}></img>
        </Col>
      </Row>
    </Container>
  







        </div>
    );
};

export default Picture;