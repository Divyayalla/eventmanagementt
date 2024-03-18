import React, { useState, useEffect } from "react";
import axios from "axios";
//import {Link} from "react-router-dom";
const Getdata = () => {
  let [students, setStudentdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getstudent')
      .then((response) => {
        setStudentdata(response.data.studentdata);
      })
  }, []); // Empty dependency array means this effect will run once after the initial render
    
    return (
    <div>
      <br />
      <h1>StudentList</h1>
      <table align="center" border={1} cellSpacing={0} cellPadding={15} >
        <thead>
          <tr>
            
            <th>Name</th>
            <th>email</th>
            <th>password</th>
            
          </tr>
        </thead>
        <tbody>
          {students.map((ele, index) => {
            return (
              <tr key={index}>
                
                <td>{ele.name}</td>
                
                <td>{ele.email}</td>
                <td>{ele.password}</td>
                
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Getdata;