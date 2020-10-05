import React, { useContext } from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="py-3 container">
          <Navbar bg="transparent" expand="lg">
                <Link to="/home" className="navbar-brand"><img className="logo" src="https://i.ibb.co/x7yjzcH/Group-1329.png" alt="logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/events" className="nav-link">Events</Link>  
                        {
                            loggedInUser.email ?
                           <p className="nav-link sign-out" onClick={()=> setLoggedInUser({})}>{loggedInUser.displayName} (sign out)</p>
                           :
                           <Link to="/login" className="nav-link">Login</Link>
                        } 
                        <Link to="/registration" className="nav-link reg-btn">Register</Link>
                        <Link to="/admin" className="admin-btn nav-link">Admin</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>  
        </div>
    );
};

export default Header;