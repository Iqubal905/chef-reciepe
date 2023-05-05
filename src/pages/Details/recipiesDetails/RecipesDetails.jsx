import React from 'react';
import './RecipesDetails.css'
import { useState } from 'react';
import { Button, Col, Row, Toast } from 'react-bootstrap';
const RecipesDetails = ({each}) => {

    const {name, method, rating, ingredients} = each


    const [show, setShow] = useState(false);

    const [buttonDisabled, setButtonDisabled] = useState(false);




    const handleClick = () => {
      setButtonDisabled(true);
      setShow(true)
      // do something else, such as making an API call
    }

    
  
    return (

        <div>
          



          <div className="card relative">
          <div className='position-absolute top-50 start-0 '>
         <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body  className='text-success fw-bold p-4 h4'>Added to favourite</Toast.Body>
        </Toast> 
    </div>


  <div className="container">

  <h4 className='my-3'><b> Name of Receipe : {name}</b></h4> 
  
   <div className='recipesDetails'>
   <p>Method : <br></br> {method}</p> 


   <p>Ingredients : {
     
     ingredients.map(element =><li>{element}</li>)
    
    }</p> 
   
    
    <p className='text-left'> Rating :{rating}</p> 
  
  </div>
   
  <Button variant="outline-success"  className='my-2 fw-bold' onClick={handleClick} disabled={buttonDisabled}>Favourite</Button>
  </div>
</div>
        </div>
    );
};

export default RecipesDetails;