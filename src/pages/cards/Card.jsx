import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Card.css'
const Card = ({data}) => {
    const {name, country} = data
    return (
        <div>
           
           
           <Container>
     
    
        <h2 className='pt-4'>{name}</h2>
           <h2 className='pt-4'>{country}</h2>
        
       
     
    </Container>
           
        </div>
    );
};

export default Card;