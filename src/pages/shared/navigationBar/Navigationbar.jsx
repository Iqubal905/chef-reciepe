import React, { useContext } from 'react'; import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
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



  const renderTooltip = props => (
    <Tooltip {...props}><h3>{user.displayName}</h3>
   </Tooltip>
  );





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
          
          <Nav className=''>

            


          {
          user &&

                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                <Image src={user.photoURL} roundedCircle  className=' w-25 h-25' />
      </OverlayTrigger>
               
               
          
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