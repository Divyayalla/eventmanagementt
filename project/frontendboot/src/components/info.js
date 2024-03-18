import React,{useEffect,useState} from "react"
import axios from "axios";
const Getdata =() =>{
    let [text,setText]=useState("");
    useEffect(()=>{
        axios.get('http://localhost:5000/text/:id')
        .then((response)=>{
            setText(response.data.txt_name)
        })
    }, ""
    );
    return (
        <div>{text}</div>
    );
};
export default Getdata;