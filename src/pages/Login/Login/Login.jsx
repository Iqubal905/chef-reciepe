import React, { useContext } from 'react';
import '../Login/Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';




const Login = () => {

    const { signIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // console.log('login page location', location)
    // const from = location.state?.from?.pathname || '/category/0'

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
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=' d-flex justify-content-center m-5'>
           <Form onSubmit={handleLogin} className='w-25'>
      <Form.Group  className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Button variant="success" type='submit'>Login</Button>
      <h4>If you have don't account please <Link to='/register'> <Button variant="outline-primary">Register</Button></Link></h4>
    </Form>
        </div>
    );
};

export default Login;