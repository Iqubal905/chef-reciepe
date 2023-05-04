import React, { useContext } from 'react';
import '../Login/Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
// import { BsFill0CircleFill } from 'react-icons';




const Login = () => {

    const { signIn, logInWithGoogle, logInWithGitHub } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // console.log('login page location', location)
    // const from = location.state?.from?.pathname || '/category/0'

    const handleGoodleLogin = () => {

        logInWithGoogle()
       .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // setUser(loggedInUser)
       })
       .catch(error => {
        console.log('error', error.message);
       })
    }
    const handleGitHubLogIn = () => {

      logInWithGitHub()
       .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // setUser(loggedInUser)
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

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='d-flex justify-content-center m-5'>
          <div>
          <Form onSubmit={handleLogin} className='w-100'>
      <Form.Group  className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Button variant="success" type='submit'>Login</Button>
      <h4>If you have don't account please <Link to='/register'> <Button variant="outline-primary">Register</Button></Link></h4>
    </Form>


    <button onClick={handleGoodleLogin}>google login</button> 
    <button onClick={handleGitHubLogIn}>GitHub login</button> 
    {/* <BsFill0CircleFill style={{ fontSize: '5rem' }}></BsFill0CircleFill> */}
          </div>

        </Container>
    );
};

export default Login;