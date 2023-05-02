import React, { useContext } from 'react'; import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import './NavigationBar.css'

const Navigationbar = () => {


  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }









    return (
      
    <div className=''>
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tasty Recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
          
          <Nav>
          {
              user && <FaUserCircle style={{ fontSize: '5rem' }}></FaUserCircle>
          }


       {
         user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
          <Link to="/login">
       <Button variant="secondary">Login</Button>
          </Link>
                            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



{/* //     {/* <NavLink
//   to="/blog"
//   style={({ isActive, isPending }) => {
//     return {
//       fontWeight: isActive ? "bold" : "",
//       color: isPending ? "red" : "black",
//     };
//   }}
// >
//   blog
// </NavLink> */} 
    </div>

    );
};

export default Navigationbar;