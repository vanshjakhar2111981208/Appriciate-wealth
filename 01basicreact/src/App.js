import Header from "./Header";
import Footer from "./Footer";
import './App.css';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { blog } from "./Data/blog";
//import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAmazon, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function App() {
    let name ="VANSH JAKHAR";
    let l=[10,20,30,40];
    let obj  = {
        a:10,
        b:"ggvgvgvg"
    }
    let s=true;
    return (
        <div className="app">
            <h1>{name}</h1>
            {
                l.map((v)=>{
                    return (
                        <div>{v}</div>
                    )
                })
            }
            <div style={{color:"red"}}>{obj.b}</div>
            <div>{100+2000}</div>
            <div></div>
            {(s) ? //(TURNARYOPERATOR) istead of ifelse
            <h1>sahi h bidu</h1>
            ://its else part
            "its false"
            }
<Header nm={obj} aa="WTECH 69"/>
<FontAwesomeIcon icon={faWhatsapp} className="text-danger"size="3x"/>
<FontAwesomeIcon icon={faAmazon} size="3x" style={{ color: "blue" }}/>
<div className="container"><h1 className="text-danger">Welcome to Hoem</h1></div>
<Footer/>
<Container fluid>
<Container>
    <Row>
        <Col className="col-12 text-left py-4">
        <h1>Welcome to WS</h1>
        </Col> 
    </Row>
    <Row>
        <Col lg="3" md="6">
        <Card style={{ width: '18em' }}>
      
      <Card.Body>
        <Card.Title>Card 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        

    </Row>
    
</Container>
</Container>
<Container>
<Row>
    {blog.map((v,i)=>{
        return(
            <Prod props={v} key={i}/>
        )
    })}
</Row>
</Container>

        </div> 
    );
}
export default App;
function Prod({props}){
    return(
        <Col lg="3" md="6">
            <Card style={{ width: '18em' }}>
      
      <Card.Body>
        {props.id} 
        <Card.Title>
            {props.title}
            </Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
    )
}

