import React from "react";
import IMG from '../components/church.jpg'
import IMG1 from '../components/multi.jpg'
//import IMG2 from '../components/img2.jpg'
import img from '../components/birthday.jpg'
import IMG3 from '../components/micro.jpg'
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

const styles = {
  card: {
    backgroundColor: 'ghostwhite',
    //borderRadius: 40,
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    height:'500px',
    width:'500px',
    borderRadius:'50%',
   
    
  },
  colors:{
    color:'salmon'

  }

}

export default function Package() {
  return(
    <div >
    <Container fluid>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={IMG} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h2" style={styles.colors}>CHURCH WEDDING </Card.Title>

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
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={IMG1} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h2" style={styles.colors}>MULTIDAY WEDDING </Card.Title>

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
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={IMG3} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h2" style={styles.colors}> MICRO WEDDING</Card.Title>

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
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={img} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h2" style={styles.colors}>BIRTHDAY PARTY </Card.Title>

              <Card.Text as="h4" style={styles.cardText}>
              A birthday party is an occasion to celebrate a person’s birth. It can be a small gathering of friends and family, or a large affair with many guests. A birthday party may be held at home, in a restaurant, or at a public place such as a park. The purpose of a birthday party is to enjoy the company of friends and family.
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
   
    </div>
    
    
  )
}