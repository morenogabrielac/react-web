import {Card, Button,Container, Row, Col} from 'react-bootstrap';
import logo from '../logo.svg';
import '../assets/jgm.css'
function Home(){
    return(
        <>
        <Container 
        variant={'dark'}
        fluid>
      <Row className="text-center">
        <Col xs={12} md={12} lg={6}>

        <img src={logo} className="app-logo" alt="logo" />
        <h1 className='JGM center'>JGM</h1>
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
        </>
    )
}

export default Home;