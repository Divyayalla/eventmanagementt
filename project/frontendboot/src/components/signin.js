import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import IMG from '../components/decor1.jpg'
import Login from '../components/login.js'
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

const styles = {
  card: {
    backgroundColor: 'ghostwhite',
    //borderRadius: 40,
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    height:'400px',
    //borderRadius: 40
    filter:'blur(1px)'
    
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

export default function Signin() {
   const [data,setData]=useState({
    username:"",
    email:"",
    password:"",

   });
   const handleSubmit=(event)=>{
    event.preventDefault();
    const api='http://localhost:5000/api/add-details'
      axios.post(api,data).then((response)=>{
        console.log(response.data)
        alert(response.data.msg)
  
      })
    }
   
  return(
    <div >
    <Container fluid>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img  src={IMG} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h2" id="sty">Signup</Card.Title>

              <Card.Text as="h4" style={styles.cardText}>
                <center>
              <form onSubmit={handleSubmit} >
   
  <div class="form-group">
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={data.username} onChange={(e)=>
       setData({...data,username:e.target.value})
    }/>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={data.email} onChange={(e)=>
       setData({...data,email:e.target.value})
    }/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    {/* <label for="exampleInputPassword1">Password</label> */}
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"value={data.password} onChange={(e)=>
       setData({...data,password:e.target.value})
    }/>
    <p style={{fontSize:'20px'}}>If Already have an account?LOGIN</p>
  </div>
  {/* sssssss */}
  <div class="form-group">
  {/* <textarea type="text" class="form-control" id="ss" placeholder="Message"/> */}
  </div>
  <button type="submit" class="btn btn-primary" id="ww">Signup</button>
  {/* <button type="submit" class="btn btn-primary" id="www" onClick={Login}>login</button> */}
  <Link to="../formlogin">
        <button  type="button" class="btn btn-primary" id="www">Login</button>
      </Link>
  

</form>
</center>
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
