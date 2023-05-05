import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Footer from '../shared/Footer';

const Blog = () => {
    
    return (
        <div>
           <Container className='text-left pt-5 px-md-5'>
            <Row>
                <Col className='mt-4 '>
                  <h4>1 : What is the difference between uncontrolled and controlled components?</h4>
                 <h6>Answer :</h6>
                  <p> A controlled component receives its current value and an update callback via 
                    props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.

                  An uncontrolled component, maintains its own internal state, and when the user int
                  eracts with the component, it updates its own state, which in turn updates the component's value.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                  <h4>2 : How to validate React Props using Prop type?</h4>
                  <h6>Answer :</h6>
                  <p>  Props are used to passing the read-only attributes to React components.
                  React JS has an inbuilt feature for validating props data type to make sure that values passed through props are valid.
                   React components have a property called propTypes which is used to setup data type validation
                  </p>
                </Col>
            </Row>
            <Row>
                <Col>
                  <h4>3 : What is the difference between nodejs and express js?</h4>
                  <h6>Answer : </h6>
                  <p>Express js : Comparing NodeJS vs Express JS, one of the main advantages of using the latter is its ease of testing; it gives you all the tools necessary to easily test your application’s functionality. 
                    You can use any testing suite (or framework) like Mocha, Chai, Jasmine, etc. to test the functionality.</p>
                  <p>Node js : NodeJS makes some big assumptions about how you’ll be structuring your application, meaning you don’t have to worry about setting up a directory structure for your app. This can make writing tests for NodeJS applications much easier, but it also means you 
                    could potentially see a lot more issues with how your code is structured if you don’t test it properly.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                  <h4>4 : What is the custom hook, and why will yuu create a custom hook?</h4>
                  <h6>Answer:</h6>
                  <p>A Custom Hook by definition is a JavaScript function whose name starts with use and this component will call
                     other React Hooks to extract logic from multiple components and make them reusable.</p>
                     <p>The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState”
                         or localStorage logic), you can put that code inside a custom hook and reuse it.</p>

                </Col>
            </Row>
           </Container>

           <Footer></Footer>
           
        </div>
    );
};

export default Blog;