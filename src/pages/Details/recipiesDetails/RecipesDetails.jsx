import React from 'react';
import './RecipesDetails.css'
const RecipesDetails = ({each}) => {

    const {name, method, rating, ingredients} = each

    return (
        <div>
          
          <div class="card">
  
  <div class="container">

  <h4 className='my-3'><b> Name of Receipe : {name}</b></h4> 
  
   <div className='recipesDetails'>
   <p>Method : <br></br> {method}</p> 


   <p>Ingredients : {
     
     ingredients.map(element =><li>{element}</li>)
    
    }</p> 
   
    
    <p className='text-left'> Rating :{rating}</p> 
  
  </div>
   

  </div>
</div>
        </div>
    );
};

export default RecipesDetails;