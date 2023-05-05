import React, { Suspense, useContext } from 'react';
import Navigationbar from '../shared/navigationBar/Navigationbar';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Card from '../cards/Card';
import './Home.css'
import { Container, Spinner } from 'react-bootstrap';
import Footer from '../shared/Footer';
import Picture from '../picture/Picture';
import Food from '../Food/Food';
import { AuthContext } from '../../providers/AuthProvider';
const OtherComponent = React.lazy(() => import('../picture/Picture'));
const Home = () => {

    const  {loading} = useContext(AuthContext)
    const datas = useLoaderData([]);
    console.log(datas);


    if(loading){
        return <Spinner animation="border" variant="primary" />
    }


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

       <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>

       <Picture></Picture>
       <Food></Food>
       </Container>

         <Footer></Footer>
        </div>
    );
};

export default Home;