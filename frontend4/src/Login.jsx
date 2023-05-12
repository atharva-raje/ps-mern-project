import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const navigate = useNavigate();
    const[remail,SetEmail]=useState('');
    const [rpassword,SetPass]=useState('');
    //const [error,setError]=useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={
            email: remail,
            password: rpassword,
       }
       axios.post('http://localhost:5000/api/user/rlogin',data)
       .then(res => {
        if(res.data==='valid')
        { 
        console.log(res.data);
        navigate('/Home');
        }
        else
        {
            alert(res.data);
        }
       }).catch(err => {
           alert(err);
       })
             
          
    }
 
    return (
        <>
        <div className="design-container"> 
        <form   className="login-form">
         <label className="labels"   htmlFor="remail">email</label>
         <input value={remail} onChange={(e) => SetEmail(e.target.value)}  type="email" placeholder="exmapleemail@gmail.com" id="remail" name="remail" />
         <label className="labels" htmlFor="rpassword">password</label>
         <input value={rpassword} onChange={(e) => SetPass(e.target.value)} type="password" placeholder="********" id="rpasword" name="rpassword"/>
         <button onClick={handleSubmit}>Login</button>
        </form>
        <Link to='/Register'>register here</Link>
        </div>
        </>
    )
};