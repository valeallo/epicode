import React from "react";
import  Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";

// D2 Crea un componente di nome MyNav, 
// che renderizzerà una navigation bar di bootstrap con i seguenti link: Home, About e Browse.

const MyNav = () => {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
  }
  
  export default MyNav;

