import React from 'react'
import { Carousel, Navbar, Container, Nav, NavDropdown, Form, Button} from "react-bootstrap"

const CarouselComponent = (props) => {
    return (
        <>
            <Navbar bg="danger" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
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
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
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


            <div className="bg-dark text-light text-center py-5">
                <h1>{(props.titulo) ? props.titulo : "Pagina sem nome"}</h1>
            </div>

            <Carousel>
                {props.dados.filmes.map(item => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
                            height={600}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.original_title}</h3>
                            <p>{item.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>

            <Container>
                {props.children}
            </Container>
        </>
    )
}

export default CarouselComponent