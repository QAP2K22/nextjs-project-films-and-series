import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from "react-bootstrap"

const Pagina = (props) => {
  return (
    <>
      <style type="text/css">
        {`
        .navBar {
          background: #000814;
        }

        .titulo {
          background: #001d3d;
          box-shadow: 0 .125rem .25rem rgba(0,0,0,1)!important;
        }
      

      }
        `}
      </style>

      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{props.title ? props.title : "Qafilms"}</title>
      </Head>

      <Navbar variant="dark" key={"lg"} className='navBar' expand={"lg"} fixed="top">
        <Container fluid>
          <Link className="navbar-brand" href={"/films"}>{props.navBarTitle ? props.navBarTitle : "QAPROJECT"}</Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"lg"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`} className='text'>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link" href={"/atores"}>Atores</Link>
                <Link className="nav-link" href={"/generos"}>Gêneros</Link>

                <NavDropdown
                  title="Séries"
                  id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                >
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                </NavDropdown>

                <NavDropdown
                  title="Filmes"
                  id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                >
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                  <Link className="dropdown-item" href={"/films"}>Gêneros</Link>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>


      <div className="titulo text-light text-center py-5 mb-5 mt-5 ">
        <h1>{(props.titulo) ? props.titulo : "Página sem nome"}</h1>
      </div>



      <Container>
        {props.children}
      </Container>


    </>
  )
}

export default Pagina