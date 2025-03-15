import React, {useState} from 'react';
import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";

import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const res = await axios.get(`http://localhost:9999/users?usersname=${username}&password=${password}`);

            if(res.data.length > 0) {
                alert("Login Successfully");
                navigate("/home");
            } else {
                setError("Wrong username or password");
            }
        } catch (error) {
            setError("Could not connect to the server");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{width: "400px", padding: "20px"}}>
                <h2 className="text-center">Login</h2>
                {
                    error && <Alert variant="danger">{error}</Alert>
                }
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required/>
                    </Form.Group>
                    <Button onClick={() => navigate("/home")} variant="primary" type="submit" className="w-100">Login</Button>
                    <Row className="mt-3">
                        <Col>
                            <div>
                                <Link to="/">Forgot password?</Link>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <div>
                                <Link to="/register">Register</Link>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;