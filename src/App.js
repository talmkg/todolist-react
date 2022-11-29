import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
function App() {
  return (
    <>
      <Container fluid className="full-size d-flex align-items-center">
        <Container id="main">
          <div className="text-center">
            <h1 className=" text-center">ToDoListios</h1>
            <img
              src="https://freepngimg.com/save/33957-coffee-logo-transparent-background/2147x2400"
              className="img-fluid"
              id="logo"
            />
          </div>
          <div>
            <h3 className="d-block text-center m-1">Your Daily Tasks:</h3>
            <Container className="text-center d-flex justify-content-center p-3  ">
              <ToDoList />
            </Container>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default App;
