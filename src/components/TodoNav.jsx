import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./imgs/logotodo.svg"
import './App.css';

function TodoNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Epicodus
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}


export default TodoNav;
