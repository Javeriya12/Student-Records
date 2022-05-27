import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { firebaseDatabase } from "../backend/firebaseHandler";
import './StudataStyles.css';
import { useNavigate } from "react-router-dom";

const RecordStuData=()=>{
    const [stuData,setstuData]=useState({
        name:"",
        usn:""
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setstuData({
            ...stuData,
            [name]: value
        })

    }

    const nav = useNavigate();


    const handleSign=async()=>{
        try{
            const recordRef=ref(firebaseDatabase,`STUDENTT-RECORDS/${stuData.usn}`);
            await set(recordRef,stuData);
            
            setstuData({
                name:"",
                usn:""})
                
            nav("/Record-list");

        }
        catch(err){
            alert(err);
        }
     
    }

    return(
        <div className="record-data-container">
            <div className="input-feilds-container">
                <input className="inputs" value={stuData.name} onChange={handleChange} name="name" placeholder="Student Name"/>
                <input className="inputs" value={stuData.usn} onChange={handleChange} name="usn" placeholder="Student USN"/>
                <button className="sign-up-button" onClick={handleSign}>Sign Up</button>

            </div>
        </div>
    )
}

export default RecordStuData;