import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const {name, recipes, likes, years_of_experience, picture, id} = data
    return (
        <div>
           
           
          
     
    
      
        
           <div class="card">
  
  <div class="container">
  <img className='' src={picture} alt="BigCo Inc. logo"/>
 
  <h4 className='my-3'><b>{name}</b></h4> 
  
   <div className='cardDetails'>
   <p><span>Years of Experience : </span>{years_of_experience}</p> 
    <p><span>Numbers of Recipes : </span>{recipes}</p> 
    <p className='text-left'><span> Likes : </span>{recipes}</p> 
  
  </div>
    <Button className=' mb-5 mt-5' variant="outline-primary"><Link  to={`/data/${id}`}>View Recipes</Link></Button>

  </div>
</div>
     
   
           
        </div>
    );
};

export default Card;