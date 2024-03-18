import {useState} from "react";
import axios from "axios";
export default function Login(){
    const[data,setData]=useState({
        'email':"",
        'password':""
    });
    let users;
    users =JSON.parse(localStorage.getItem('userData'));
    const handleSubmit=(event)=>{
        event.preventDefault();
        const api='http://localhost:5000/api/login-user'
        axios.post(api,data).then((response)=>{

            console.log(response.data)
            alert(response.data.msg)
            
                if(response.status===200){
                    localStorage.setItem('userData',JSON.stringify(response.data.userdata))
                 window.location.href='/Home'
                }
            });
    };
    return(
        <div className="App">
        <br />
        {users && users.name}
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label>email</label>
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
            <button type="submit">login</button>

        </div>
        
        </form>
        </div>
    )
}
