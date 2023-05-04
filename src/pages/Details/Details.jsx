import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Navigationbar from '../shared/navigationBar/Navigationbar';
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap';

const Details = () => {



    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleClick = () => {
      setButtonDisabled(true);
      // do something else, such as making an API call
    }







    const singleId = useParams()
 
    const allDataId = useLoaderData([])

    console.log(singleId, allDataId);

    const [singleMan, setSingleMan]  = useState([])

    useEffect(()=>{
     const ele =  allDataId.find(data => data.id == singleId.dataId );
     console.log(ele);
     setSingleMan(ele)
    },[])
    const {name, recipes, likes, years_of_experience, picture, id, bio} = singleMan

    return (
        <div>
           <Navigationbar></Navigationbar>
           
           <Container className='mt-5'>
           <Row>
        <Col xs={12}md={6} className='m-0 p-0' >
        <Image src={picture}   className='p-0 w-100 m-0'/>
        </Col>
        <Col xs={12}md={6} className='m-0 p-0' >
        <Card className='m-5'>
      <Card.Body className='mt-md-5 pt-md-5'>
        <Card.Title className='py-4 fw-bold'>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{bio}</Card.Subtitle>
        <Card.Text>
        <div className=''>
   <p className='m-0 fw-bold'><span >Years of Experience : </span>{years_of_experience}</p> 
    <p className='m-0 fw-bold'><span >Numbers of Recipes : </span>{recipes}</p> 
    <p className='m-0 fw-bold'><span > Likes : </span>{recipes}</p> 
  
  </div>
        </Card.Text>
        </Card.Body>
        <Button variant="outline-success"  className='my-2 fw-bold' onClick={handleClick} disabled={buttonDisabled}>Favourite</Button>


    
    </Card>
        </Col>
      
      </Row>
    
     <Row>
        <Col>
        


        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name of recipes</th>
          <th>Cooking Method</th>
          <th>Ingredients</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Yakitori</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>



        </Col>
     </Row>


    </Container>
           
        </div>
    );
};

export default Details;