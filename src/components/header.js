import React from "react"
import {Navbar, Nav} from 'react-bootstrap'
import areta from "../images/areta.png"
import '../styles/global.css'


const Header = () => (

  <Navbar className="pad-header" bg="white" expand="lg">
  <Navbar.Brand href="#home">
    <img
      src={areta}
      width="auto"
      height="auto"
      alt="React Bootstrap logo"
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="pad-header-li" href="/">Home</Nav.Link>
      <Nav.Link className="pad-header-li" href="#monitoring">Testimoni</Nav.Link>
      <Nav.Link className="pad-header-li" href="/cara-kerja/">Project</Nav.Link>
      <Nav.Link className="pad-header-li" href="#project">About</Nav.Link>
      <Nav.Link className="pad-header-li" href="#footer">Hubungi Kami</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header
