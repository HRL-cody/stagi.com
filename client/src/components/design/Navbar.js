import React from 'react';
// import './nav.css';
import {Navbar,Nav, FormControl,Button,Form} from 'react-bootstrap';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
  return (
    <div>
       <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Link href="#home">Home</Link>
      <Link href="#features">Features</Link>
      <Link href="#pricing">Pricing</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
};
export default Menu;