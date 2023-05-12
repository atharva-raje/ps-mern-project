import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
export const Home = () =>{
    const navigate = useNavigate();
    // return(
    // <h1>sucessful login</h1>
    // )
    const [data,setData] = useState([]);
    fetch("http://localhost:5000/api/user/rlogin",{
        method:"GET",
    })
    .then((res) =>res.json())
    .then((data) =>{
        console.log(data,"userData");
        setData(data.data);
        console.log(data);
    })
    const move= (e) =>{
        navigate('/');

    }
        return(
    <>
    
 
    <div> 
    <h1>successfull login</h1>
    <table style={{width:900,textAlign:"center" }}>
                <th>Name</th>
                <th>Rollno</th>
                <th>Email</th>
                <th>Password</th>
                    {data.map(i =>{
                        return(
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.rollno}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                            </tr>
                        )
                    })}
            </table>
            <button onClick={move}>logout</button>
            </div>

    </>
     )
};