import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap"

const Pagina = (props) => {
  return (
    <>
      <Navbar bg="danger" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/films/">QAFILMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className="bg-dark text-light text-center py-5 mb-5">
        <h1>{(props.titulo) ? props.titulo : "Pagina sem nome"}</h1>
      </div>

      <Container>
        {props.children}
      </Container>

    </>
  )
}

export default Pagina