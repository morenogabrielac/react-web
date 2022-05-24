import {Navbar, Container, Nav, NavDropdown, Card, Button, Row, Col} from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css'; 



function Main (){
    return (
        <>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>s
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<header className="App-header">
<Container fluid>
      <Row className="text-center">
        <Col xs={12} md={12} lg={6}>

        <img src={logo} className="App-logo" alt="logo" />
        <h1>JGM</h1>
        <h3>Juan</h3>
        <h3>Gabriel</h3>
        <h3>Moreno</h3>
        <h5>Full stack developer</h5>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>






          </Col>

          <Col  xs={12} md={12} lg={6}>
          <Card 
          style={{ width: '18rem' }}
          text='white'
          bg ='success'
          >
          <Card.Img variant="top" src='https://i.pinimg.com/236x/b9/6f/db/b96fdb744c055d00dd090857c7ccf4f5.jpg' />
          <Card.Body>
            <Card.Title>Hi I'm Gabi</Card.Title>
            <Card.Text>
              I enjoy taking complex problems and turning it into simple.
              I'm excited on continue refining my skills. 
              </Card.Text>
            <Button variant="warning">More about me</Button>
          </Card.Body>
        </Card>
    
          
          </Col>
          </Row>
          </Container>




      </header>
<body className="App-body" >
      <div>
              <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.dribbble.com/users/5031/screenshots/3713646/attachments/832536/wallpaper_mikael_gustafsson.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
</body>

        </>
    )
}
export default Main;