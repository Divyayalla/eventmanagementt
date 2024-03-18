import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Eventshow(){
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/getallevents').then((res)=>{
        setData(res.data)
      })
    },[])
    return(
        <>
            {/* <h1>New Products</h1> */}
            <div className="events-list">
            {
              data.map((ele,i)=>{
                return (
                    <div className="card-container">
                    <div className="card2" key={i}>
                    <img src={`http://localhost:5000/images/${ele.eventpic}`} alt=""/>
                    <center>
                    <h5 style={{color:"#4b0082",paddingTop:"5px"}}>{ele.event}</h5>
                    <h4>{ele.price}</h4>
                    </center>
                    
                  </div>

                    </div>
                  
                )
               
            }) 
          }
          </div>
            
        </>
    )
}
export default Eventshow
    

