import React, { useState } from "react";
import axios from "axios";
import IMG from '../components/img3.jpg'
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

const styles = {
  card: {
    backgroundColor: '#FFF0F5',
    //borderRadius: 40,
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    height:'300px',

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

export default function Register() {
   const [data,setData]=useState({
    email:"",
    date:"",
    events:""
   });
   const handleSubmit=(event)=>{
    event.preventDefault();
    const api='http://localhost:5000/api/add-email'
      axios.post(api,data).then((response)=>{
        console.log(response.data)
        alert(response.data.msg)
  
  
      })

    }
    const ad=()=>{
      alert("Sucessfully Registered")
    }
    
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
              <Card.Title as="h2" id="sty">SEND ME A MESSAGE</Card.Title>

              <Card.Text as="h4" style={styles.cardText}>
              <form onSubmit={handleSubmit}>
  <div class="form-group">
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={data.email} onChange={(e)=>
       setData({...data,email:e.target.value})
    }/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    {/* <label for="exampleInputPassword1">Password</label> */}
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="date"value={data.date} onChange={(e)=>
       setData({...data,date:e.target.value})
    }/>
  </div>
  <div class="form-group">
  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="event" value={data.events} onChange={(e)=>
       setData({...data,events:e.target.value})
    }/>
  </div>
  <div class="form-group">
  <textarea type="text" class="form-control" id="ss" placeholder="Message"/>
  </div>
  <button type="submit" class="btn btn-primary" id="ww" onClick={ad}>Submit</button>
</form>
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
