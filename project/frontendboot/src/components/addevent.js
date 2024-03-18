import { useState } from "react";
import axios from "axios";
function Addevent(){
    const[formdata,setFormdata]=useState({
        'event':'',
        'price':'',
        'eventpic':''
    })
    console.log(formdata);
    let backend_api="http://localhost:5000/addevent"
    const handlesubmit=(e)=>{
        const Inputfields=new FormData()
        Inputfields.append('event',formdata.event)
        Inputfields.append('price',formdata.price)
        Inputfields.append('myfile',formdata.eventpic)
        
        e.preventDefault(); 
        axios.post(backend_api,Inputfields).then((res)=>{
            console.log(res)
            if(res.status===200){
                alert("success")
            }
        })
        
    }
    return(
        <div>
            {/* <h1>User Form</h1> */}
            <form onSubmit={handlesubmit} action="post">
            <label>event: </label>
                <input type="text"  name="event" value={formdata.event} onChange={(e)=>setFormdata({...formdata,event:e.target.value})}/>
                <br/>
                <label>price: </label>
                <input type="text"  name="price" value={formdata.price} onChange={(e)=>setFormdata({...formdata,price:e.target.value})}/>
                <br/>
                <label>Upload: </label>
                <input type="file"  name="myfile"   onChange={(e)=>setFormdata({...formdata,eventpic:e.target.files[0]})}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Addevent;