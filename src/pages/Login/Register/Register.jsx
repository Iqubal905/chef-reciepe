import React, { useContext, useState } from 'react';
import { Button, Container, Form, Toast } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Footer from '../../shared/Footer';

const Register = () => {
  const [error, setError] = useState('')
  const [show, setShow] = useState(false);

  const { createUser } = useContext(AuthContext);
 

  const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;

    //   console.log(name, email, photo, password)
      createUser(email, password)
          .then(result => {
              const createdUser = result.user;
              console.log(createdUser);
              setError('')
              setShow(true)
              form.reset()
          })
          .catch(error => {
              console.log(error.message);
              setError(error.message)
          })
  }




    return (

        <div>
      <Container className='w-25 mx-auto'>
      <h3 className='pt-5'>Please Register</h3>
      <Form  onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' placeholder="Your Name" required />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" required />
          </Form.Group>

         
          <Button variant="primary"  type="submit">
              Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
              Already Have an Account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-success">

          </Form.Text>
          <Form.Text className="text-danger">

          </Form.Text>
          <p className='text-danger'>{error}</p>
        
      </Form>


      <div className='position-absolute top-50 start-50'>
         <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body  className='text-success fw-bold p-2'>User has been created successfully!</Toast.Body>
        </Toast> 
    </div>


  </Container>
  <Footer></Footer>
  </div>   
    );
};

export default Register;