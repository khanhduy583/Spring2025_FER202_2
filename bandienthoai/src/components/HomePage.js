import React, {useEffect} from 'react';
import axios from "axios";
import {Button, Card, Carousel, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";

const HomePage = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid className="bg-dark text-white">
            <Row className="row">
                <Col className="col-lg-12">
                    <Container>

                        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                            <Container fluid>

                                {/* Dùng fluid để mở rộng container */}
                                <Navbar.Brand href="#">Pizza House</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#features">About Us</Nav.Link>
                                        <Nav.Link href="#pricing">Contact</Nav.Link>
                                    </Nav>

                                    {/* Form tìm kiếm tối ưu */}
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            className="me-2"
                                        />
                                        <Button type="submit" variant="outline-light">
                                            Submit
                                        </Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-12 mb-5">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/pizza1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/pizza2.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/pizza3.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/pizza4.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/pizza5.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <br />
            <Row>
                <Col className="col-lg-12">
                    <Container>
                        <Row>
                            <h2>Our Menu</h2>

                            <Col className="col-md-3 mb-5">
                                <Card>
                                    <Card.Img variant="top" src="./img/menu1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pizza</Card.Title>
                                        <Card.Text>
                                            <small className="text-muted">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.
                                            </small>
                                        </Card.Text>
                                        <Button className="form-control" variant="dark">
                                            Buy
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-md-3">
                                <Card>
                                    <Card.Img variant="top" src="./img/menu2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pizza</Card.Title>
                                        <Card.Text>
                                            <small className="text-muted">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.
                                            </small>
                                        </Card.Text>
                                        <Button className="form-control" variant="dark">
                                            Buy
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-md-3">
                                <Card>
                                    <Card.Img variant="top" src="./img/menu3.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pizza</Card.Title>
                                        <Card.Text>
                                            <small className="text-muted">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.
                                            </small>
                                        </Card.Text>
                                        <Button className="form-control" variant="dark">
                                            Buy
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-md-3">
                                <Card>
                                    <Card.Img variant="top" src="./img/menu4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pizza</Card.Title>
                                        <Card.Text>
                                            <small className="text-muted">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.
                                            </small>
                                        </Card.Text>
                                        <Button className="form-control" variant="dark">
                                            Buy
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <br />
            <Col className="col-lg-12 mb-5">
                <Container>
                    <Row>
                        <h2 className="text-center">Book Your Table</h2>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Name *"
                                        className="form-control"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Email *"
                                        className="form-control"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Select
                                    aria-label="Default select example"
                                    className="form-control"
                                >
                                    <option>Select a Service</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                placeholder="Please write your comment"
                                                className="mt-5"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Col className="mb-5">
                            <Button
                                as="input"
                                variant="warning"
                                type="submit"
                                value="Send Message"
                                className="text-white"
                            />
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Container>
    );
};

export default HomePage;