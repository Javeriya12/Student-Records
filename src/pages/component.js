import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { firebaseAuth } from "../backend/firebaseHandler";
import './styles.css';
import { useNavigate } from "react-router-dom";

const Component=()=>{
    const [userInput,setuserInput]=useState({
        emailid:"",
        password:""
    });

    const nav = useNavigate();

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setuserInput({
            ...userInput,
            [name]:value
        })

    }

    const handleClick=async()=>{
        try{
            await createUserWithEmailAndPassword(firebaseAuth,userInput.emailid,userInput.password)
          
            nav("/Record-data");
        }
       catch(err){
           alert(err);
       }
    }

    return(
        <div className="component-container">
          <div className="input-container">
              <input classname="inputsCon" name="emailid" onChange={handleChange}  placeholder="Email ID"/>
              <input classname="inputsCon" name="password" onChange={handleChange}  placeholder="Password"/>
              <button className="create-account-button" onClick={handleClick}>Create Account</button>
          </div>
        </div>
    )
}

export default Component;