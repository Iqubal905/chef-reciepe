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
      
    <Container>
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='fixed-top'>
      <Container>
        <Navbar.Brand href="#home">Tasty Recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavLink
                to="/home"
                style={({ isActive, isPending }) => {
             return {
               fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "white",
             };
               }}
               > Home
                </NavLink> 
            <NavLink
                to="/blog"
                style={({ isActive, isPending }) => {
             return {
               fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "white",
             };
               }}
               > Blog
                </NavLink> 
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


         <NavLink
         to="/login"
         style={({ isActive, isPending }) => {
      return {
        fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "white",
      };
        }}
        > Login
         </NavLink> 


      //     <Link to="/login">
      //  <Button variant="secondary">Login</Button>
      //     </Link>
                            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



{
    
   


} 
    </Container>

    );
};

export default Navigationbar;