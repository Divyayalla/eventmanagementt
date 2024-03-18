// import React, { useState } from "react";
// import axios from "axios";
// export default function Formlogin(){
//     const[data,setData]=useState({
//         'email':"",
//         'password':""
//     });


//     const handleSubmit1=(e)=>{
//         e.preventDefault();
//         const api='http://localhost:5000/api/login-user'
//         axios.post(api,data).then((response)=>{

//             console.log(response.data)
//             alert(response.data.msg)
            
//                 if(response.status===200){
//                     localStorage.setItem('userData',JSON.stringify(response.data.userdata))
//                     window.location.href='/Home'
//                 }
//             });
    
//       }

//     return(
//         <center>

//         <div className="App" style={{background:'#ffdab9',height:'250px'}} >
//         <br />
//         <form onSubmit={handleSubmit1} className="cc"  >
//         <div className="form-control" style={{border:"2px solid silver "}}>
//             <label >Email:</label>
//             <input className="cc1" style={{border:"2px solid silver"}} 
//             type="text"
//             name="email"
//             onChange={(e)=>
//             setData({...data,email:e.target.value})}/>
//         </div>
        
//         <div className="form-control" style={{border:"2px solid s"}}>
//             <label>Password:</label>
//             <input style={{border:"2px solid silver"}} 
//             type="password"
//             name="password"
//             onChange={(e)=>
//             setData({...data,password:e.target.value})}/>
//         </div>
//             <button type="submit" class="btn btn-primary" style={{width:'100px',marginBottom:'10px'}} >login</button>
        
//         </form>
//         </div>
//         </center>

//     )
// }



import React, { useState } from "react";
import axios from "axios";

export default function Formlogin() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const api = 'http://localhost:5000/api/login-user';
    axios.post(api, data).then((response) => {
      console.log(response.data);
      alert(response.data.msg);

      if (response.status === 200) {
        localStorage.setItem('userData', JSON.stringify(response.data.userdata));
        window.location.href = '/Home';
      }
    });
  };

  return (
    <center>
      <div className="App" style={{ background: 'silver', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="card" style={{ width: '400px', padding: '20px', background: 'lightpink', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit1} className="cc">
            <div className="form-control" style={{ border: "2px solid silver" }}>
              <label>Email:</label>
              <input className="cc1" style={{ border: "2px solid silver" }}
                type="text"
                name="email"
                onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>

            <div className="form-control" style={{ border: "2px solid silver" }}>
              <label>Password:</label>
              <input style={{ border: "2px solid silver" }}
                type="password"
                name="password"
                onChange={(e) => setData({ ...data, password: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100px', marginBottom: '10px' }} >Login</button>
          </form>
        </div>
      </div>
    </center>
  );
}
