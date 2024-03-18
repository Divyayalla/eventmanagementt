import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../components/wed.jpeg"
import img2 from "../components/san.jpeg"
import img3 from "../components/haldi11.jpeg"
import img4 from "../components/wed1"
import './Carousel.css';
const Gallery =()=>{
    return(
      <>  
      <div className='p-5'>  
      <Carousel>  
    <Carousel.Item>  
    <img style={{maxHeight:"70vh"}}  
        className="d-block w-100"  
        src={img1}  
        alt="First slide"  
      />   
    </Carousel.Item>  
    <Carousel.Item>  
      <img  
        className="d-block w-70"  
        src={img2}  
        alt="Second slide"  
      />    
    </Carousel.Item>  
    <Carousel.Item>  
      <img  
        className="d-block w-70"  
        src={img3}  
        alt="Third slide"  
      />  
    
      
    </Carousel.Item> 
    <Carousel.Item>  
      <img  
        className="d-block w-70"  
        src={img4}  
        alt="Fourth slide"  
      />  
    
      
    </Carousel.Item>  
  </Carousel>  
  </div>  
      </>  
    )
}
export default Gallery