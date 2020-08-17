import React from 'react'
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from "react-bootstrap/Navbar";
import header from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return( <div className={header.stage}>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-2" />
                    <Button  variant="outline-info">Search</Button>
                </Form>
            </Navbar>
    </div>

    )
}
export default Header;