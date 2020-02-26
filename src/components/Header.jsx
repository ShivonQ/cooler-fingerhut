import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap'

const Header = ({ cart }) => {

  return (
    <div>
      <div className="bg-dark pt-3 pb-1">
        <p className="text-light text-center">free shipping on your order of $150 or more | promo code <strong>CMQ69</strong></p>
      </div>
      <Navbar className="pt-0 pb-0" bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src="/logo.png" width={75} alt="Cooler Fingerhut"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
          <InputGroup className="mr-sm-2">
            <FormControl
              placeholder="Search Products"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
          </Form>
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#home">Cart{(cart.length > 0 && <span>&nbsp;&#40;{cart.length}&#41;</span>)}</Nav.Link>
          <div className="d-lg-none">
            <Nav.Link href="/PLP/1">Sale</Nav.Link>
            <Nav.Link href="/PLP/2">Women</Nav.Link>
            <Nav.Link href="/PLP/3">Men</Nav.Link>
            <Nav.Link href="/PLP/4">Home</Nav.Link>
            <Nav.Link href="/PLP/5">Electronics</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>)

}

export default Header

