import React from "react";
import IMG from '../components/img3.jpg'
import IMG1 from '../components/img4.jpg'
import IMG2 from '../components/img2.jpg'
import IMG3 from '../components/img5.jpg'
import img from '../components/img6.jpg'

import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

const styles = {
  card: {
    backgroundColor: '#FFF0F5',
    //borderRadius: 40,
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    //borderRadius: 40
    
  },
  cardImage1: {
    //objectFit: 'cover',
    //borderRadius: 40
    height:'300px',
    width:'370px',
    paddingLeft:"50px"
  },
  card1: {
    backgroundColor: '#FFF0F5',
    padding: '3rem'
    
  }, 
}

export default function Home() {
  return(
    <div >
        <div style={{background:"#FFF0F5"}}>
          <center>
          <img src={img}/>
          </center>
          </div>
    <Container fluid>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={IMG} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h2">WEDDING PLANNER </Card.Title>

              <Card.Text as="h4" style={styles.cardText}>
              A wedding is a special celebration and hence every aspect of a wedding is considered important, including wedding decorations. Whether it is a simple décor or an extravagant affair, a wedding decoration is a must to set the tone for the occasion. They accentuate the venue and the ceremony 
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
    <Container fluid>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0 shadow" style={styles.card1}>
          <Row>
            <Col>
              <Card.Img src={IMG1} style={styles.cardImage1} />
            </Col>
            <Col>
              <Card.Img src={IMG3} style={styles.cardImage1} />
            </Col>
            <Col>
              <Card.Img src={IMG2} style={styles.cardImage1} />
            </Col>
            <Col>
            
           
              <Card.Body>
              {/* <Card.Title as="h2">WEDDING PLANNER    </Card.Title> */}

              {/* <Card.Text as="h4" style={styles.cardText}>
              A wedding is a special celebration and hence every aspect of a wedding is considered important, including wedding decorations. Whether it is a simple décor or an extravagant affair, a wedding decoration is a must to set the tone for the occasion. They accentuate the venue and the ceremony 
              </Card.Text> */}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
    </div>
    
    
  )
}