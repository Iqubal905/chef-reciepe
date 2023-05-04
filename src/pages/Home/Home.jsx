import React from 'react';
import Navigationbar from '../shared/navigationBar/Navigationbar';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Card from '../cards/Card';
import './Home.css'
import { Container } from 'react-bootstrap';
import Footer from '../shared/Footer';
import Picture from '../picture/Picture';
import Food from '../Food/Food';

const Home = () => {
    const datas = useLoaderData([]);
    console.log(datas);
    return (
        <div>
           <Navigationbar></Navigationbar>
           <Header></Header>

       <Container>
       <h2 className='pt-6 mt-5 mb-0'> Famous Chef of Japan</h2>
       <div className='card-card'>
           

           {
           datas.map(data => <Card
               key={data.id}
               data={data}
           ></Card>)
           
                }
         
       </div>

       <Picture></Picture>
       <Food></Food>
       </Container>

         <Footer></Footer>
        </div>
    );
};

export default Home;