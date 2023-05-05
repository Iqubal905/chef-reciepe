import React, { useContext, useState } from 'react';
import '../Login/Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Footer from '../../shared/Footer';
// import { BsFill0CircleFill } from 'react-icons';




const Login = () => {

   const [error, setError] = useState('')

    const { signIn, logInWithGoogle, logInWithGitHub } = useContext(AuthContext);
    
    const handleGoodleLogin = () => {

        logInWithGoogle()
       .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
       
       })
       .catch(error => {
        console.log('error', error.message);
       })
    }
    const handleGitHubLogIn = () => {

      logInWithGitHub()
       .then(result =>{
        const loggedInUser = result.user;
        
       })
       .catch(error => {
        console.log('error', error.message);
       })
    }



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')
    

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
 
    <div>
        <Container className='d-flex justify-content-center m-5'>
          <div>
          <Form onSubmit={handleLogin} className='w-100'>
      <Form.Group  className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Button variant="outline-success" type='submit'>Login</Button>
      <h4>If you have don't account please <Link to='/register'> <Button variant="outline-secondary">Register</Button></Link></h4>
    </Form>


    <Button variant="outline-success" type='submit' onClick={handleGoodleLogin}>LogIn with Google</Button> 
    <Button variant="outline-success" type='submit' onClick={handleGitHubLogIn}>LogIn with Github</Button> 
   
    <p className='text-warning'>{error}</p>
          </div>

 </Container>
 <Footer></Footer>
 </div>

    );
};

export default Login;