import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import {Container} from "react-bootstrap";
import Register from "./components/Register";
import HomePage from "./components/HomePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Container fluid>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="home" element={<HomePage />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;
