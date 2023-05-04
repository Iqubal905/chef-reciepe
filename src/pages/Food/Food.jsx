import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Food.css'
const Food = () => {
    return (
        <div className=''>


          <h2 className='pt-5'>About Food</h2>
             <Row>
        <Col className='healthy p-4' md={6}>
        <h4>Why healthy food is importants for us? </h4>
       <p>1 : <span>Provides essential nutrients: Good food is packed with essential nutrients like vitamins, minerals, and antioxidants that our bodies need to function properly. These nutrients help to maintain a healthy immune system, support brain function, 
        and reduce the risk of chronic diseases like heart disease, cancer, and diabetes.</span></p>
        <p>2 : <span>Boosts energy levels: Eating a balanced diet of good food can help to increase energy levels and reduce feelings of fatigue. Foods like whole grains, fruits, and vegetables provide slow-burning carbohydrates that release energy over a longer
             period of time, helping to sustain energy levels throughout the day.</span></p>
             <p>3 : <span>Improves mental health: Good food can also have a positive impact on mental health. Research has shown that diets that are high in fruits, vegetables, whole grains, and lean protein can reduce the risk of depression and anxiety, 
                and improve overall mood and well-being.</span></p>
        </Col>
        <Col  className='healthy p-4' md={6}>
        <h4>Why unhealthy food is not for us? </h4>
        <p>1 : <span>Can lead to weight gain: Many unhealthy foods are high in calories, unhealthy fats, and added sugars. Consuming these foods
             regularly can lead to weight gain and obesity, which can increase the risk of other health problems like heart disease and diabetes.</span></p>
        <p>2 : <span>Can cause digestive problems: Unhealthy foods like fast food, junk food, and processed foods are often low in fiber and high in unhealthy fats, which can cause digestive problems like constipation, bloating, 
            and gas</span></p>
        <p>3 : <span>Can lead to mood swings: Unhealthy foods like sugary snacks and refined carbohydrates can cause blood sugar levels to spike and
             then crash, leading to mood swings, fatigue, and difficulty concentrating.</span></p>
        </Col>
      </Row>
        </div>
    );
};

export default Food;