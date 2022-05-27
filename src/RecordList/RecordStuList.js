import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { firebaseDatabase } from "../backend/firebaseHandler";
import './RecordListStyles.css';

const RecordStuList = () => {

    const [stuList, setstuList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const studentRef = ref(firebaseDatabase, 'STUDENTT-RECORDS');
            onValue(studentRef, (dataSnapshot) => {
                if (dataSnapshot.exists()) {
                    const temp = [];
                    for (const usn in dataSnapshot.val()) {
                        const student = dataSnapshot.child(usn).val();
                        temp.push(student);
                    }
                    setstuList(temp);
                }

                else {
                    alert("no records found")
                }

            })
        }
        fetchData();
    }, []);
    return (
        <div className="list-containr">
            <h1>List Of Students</h1>
            <div className="grid-list">
            {
                stuList.map((item)=>{
                    return(
                        <div className="grid-content"> 
                            <h3>{item.name}</h3>
                            <p>{item.usn}</p>

                        </div>

                    )

                })
            }
            </div>
            
        </div>
    )
}
export default RecordStuList;