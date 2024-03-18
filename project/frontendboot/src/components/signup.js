import {useState} from "react";
import axios from "axios";
export default function Signup(){
    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        const api='http://localhost:5000/api/add-user'
        axios.post(api,data).then((response)=>{
            console.log(response.data)
            if(response.data.user){
                alert("Registered Succesfully")
                window.location.href='/'
            }
        })
    }
    return(
        <div className="App">
        <br />
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label>Name</label>
            <input
            type="text"
            name="name"
            onChange={(e)=>
            setData({...data,name:e.target.value})}/>
        </div>
        <div className="form-control">
            <label>Email</label>
            <input
            type="text"
            name="email"
            onChange={(e)=>
            setData({...data,email:e.target.value})}/>
        </div>
        <div className="form-control">
            <label>password</label>
            <input
            type="password"
            name="password"
            onChange={(e)=>
            setData({...data,password:e.target.value})}/>
        </div>
        <div className="form-control">
            <label></label>
            <button type="submit"> Signup</button>

        </div>
        
        </form>
        </div>
    )
}
