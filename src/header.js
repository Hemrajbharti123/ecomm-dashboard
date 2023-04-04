import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        <Link to="/add" >Add Product</Link>
                        <Link to="/update" >Update Product</Link>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" >Register</Link>
                    </Nav>
            </Navbar>
        </div>
    )
}
export default Header