import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    useParams, Routes,
} from "react-router-dom";
import Home from "../pages/home";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Classe from "../pages/classe";
import Chatroom from "../pages/chatroom";

function Navigation(){
    return(
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Gym</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/classes">Classes</Nav.Link>
                        <Nav.Link href="/login">Signup</Nav.Link>
                        <Nav.Link href="/chatroom">Chatroom</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br/>

            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/classes" element={<Classe/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/chatroom" element={<Chatroom/>}/>


            </Routes>

        </Router>
    );
}

export default Navigation;