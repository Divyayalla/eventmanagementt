import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Signup from './components/signup';
// import React from 'react';
// import Getdata from './components/getdata';
import LoginForm from './components/formlogin.js';
// import Logout from './components/logout';

import Navbar from './components/navbar'
import Home from './components/home.js'
import Register from "./components/register";
import Events from './components/events.js';
import Info from './components/info.js';
import Package from './components/package.js';
import Gallary from './components/gallary.js';
import Signin from './components/signin.js';
import Eventshow from './components/eventshow.js';
import Addevent from './components/addevent.js';
// import img1 from './components/img2.jpg'
function App() {
  return (
    <BrowserRouter>
    <div className='a2'>
      <Navbar />
          {/* <div style={{background:"#FFF0F5"}}>
          <center>
          <img src={img}/>
          </center>
          </div> */}
      <switch>
      <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Events" element={<Events/>} />
            <Route path="/Info" element={<Info/>} />
            <Route path="/Package" element={<Package/>} />
            <Route path="/Gallary" element={<Gallary/>} />
            <Route path="/formLogin" element={<LoginForm/>} />
            <Route path="/eventshow" element={<Eventshow/>} />
            <Route path="/addevent" element={<Addevent/>} />
            <Route path="/" element={<Signin/>} />
           

      </Routes>
       </switch>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
