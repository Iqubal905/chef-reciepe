import React from 'react';
import Navigationbar from '../shared/navigationBar/Navigationbar';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Card from '../cards/Card';
import './Home.css'
import { Container } from 'react-bootstrap';

const Home = () => {
    const datas = useLoaderData([]);
    console.log(datas);
    return (
        <div>
           <Navigationbar></Navigationbar>
           <Header></Header>

       <Container>
       <div className='card-card'>
           

           {
           datas.map(data => <Card
               key={data.id}
               data={data}
           ></Card>)
           
                }
         
       </div>
       </Container>
           
        </div>
    );
};

export default Home;