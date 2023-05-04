import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../assets/couro-6.jpg'
import img2 from '../../assets/cou-f.jpg'
import img3 from '../../assets/coursol-3.jpg'
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
          <h2>Masaharu Morimoto</h2>
          <h4>He is known for his innovative and contemporary style of Japanese cuisine,
             and has appeared on several television shows, including Iron Chef and Iron Chef America.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  mw-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Masaharu Morimoto's Food</h2>
          <h4>Tuna Pizza: A crispy flatbread topped with raw tuna, anchovy aioli, and jalapeño. <br></br>

Morimoto Soba Ale: A beer brewed with buckwheat soba noodles and hop leaves, created in collaboration with Rogue Ales..</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mw-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Morimoto's Restaurants</h2>
          <h4>
          Morimoto has also opened several restaurants around the world, including in Tokyo, New York, and Dubai
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         </Container>
       </div>
    );
};

export default Header;