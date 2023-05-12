import React,{useState} from "react";
import axios from "axios";
 export const registerStudent =() =>{
    // const [id,Setid] =useState('');
    // const[name,SetName]=useState('');
    // const[password,SetPass]=useState('');
    // const handleSumbit =(e)=>{
    //     const data ={
    //         id:id,
    //         name: name,
    //         password: password
    //     }
    //     axios.post('http://localhost:5000/api/user/rregister',data)
    //     .then(res => res.data())
    //     .catch(err => err.data())
    //      1
    // }
    return(
        <>
            <form >
                <label id="name">name</label>
                <input type="name"   id="name" />
                <label id="id">id</label>
                <input type="String"   id="id" />
                <label id="password">password</label>
                <input type="name"  id="password" />
            </form>
            <button type="submit">sumbit here</button>
        </>
    );

};