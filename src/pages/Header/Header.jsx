import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../../public/c-1.jpg'
import img2 from '../../../public/c-2.jpg'
import img3 from '../../../public/c-3.avif'
import '../Header/Header.css'
const Header = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    

    return (
       <div>
         <Container>
         <Carousel className='' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className="d-block w-100 mw-100 "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  mw-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mw-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         </Container>
       </div>
    );
};

export default Header;