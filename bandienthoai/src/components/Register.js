import React from 'react';
import {useNavigate} from "react-router-dom";
import {Alert, Button, Card, Container, Form} from "react-bootstrap";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if(!username || !password || !email || !confirmPassword) {
            setError("Please enter a valid information");
            return;
        }

        if(password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await fetch("http://localhost:9999/users");
            const users = await res.json();
            const userExists = users.some((user) => user.email === email);

            if (userExists) {
                setError("Email already exists");
                return;
            }

            const newUser = { username, password, email };
            await fetch("http://localhost:9999/users", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(newUser),
            }, []);

            setSuccess("Registered successfully");
            setTimeout(() => navigate("/"), 3000);
        } catch (error) {
            setError("Register failed with error, Please try again");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "400px", padding: "20px" }}>
                <h2 className="text-center">Register</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Register
                    </Button>

                    <div className="text-center mt-3">
                        <Button variant="link" onClick={() => navigate("/")}>
                            Already have an account? Login now
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Register;