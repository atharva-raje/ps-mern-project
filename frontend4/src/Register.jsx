import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
export const Register = () => {
    const[rname,SetName] = useState('');
    const[remail,SetEmail] = useState('');
    const [rpassword,SetPass] = useState('');
    const [rpassword1,SetPass1] = useState('');
    const handleSubmit = (e) => {
       e.preventDefault();
       const data ={
            name: rname,
            email: remail,
            password: rpassword,
            password1: rpassword1
       }
        axios.post('http://localhost:5000/api/user/rregister',data)
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <> 
        <div className="design-container">
        <h1>Registeration</h1> 
        <form onSubmit={handleSubmit} className="register-form" >
        <label   htmlFor="rname">Name</label>
         <input value={rname} onChange={(e) => SetName(e.target.value)}  type="name" placeholder="full name" id="rname" name="rname" />
         <label  htmlFor="remail">email</label>
         <input value={remail} onChange={(e) => SetEmail(e.target.value)}  type="email" placeholder="exmapleemail@gmail.com" id="remail" name="remail" />
         <label   htmlFor="rpassword">password</label>
         <input value={rpassword} onChange={(e) => SetPass(e.target.value)} type="password" placeholder="********" id="rpasword" name="rpassword"/>
         <label   htmlFor="rpassword1"> confirm password</label>
      <input value={rpassword1}  onChange={(e) => SetPass1(e.target.value)}  type="password" placeholder="********" id="rpasword1" name="rpassword1"/>
         <button type="sumbit">Login</button>
        </form>
        <Link to="/">register here</Link>
        </div>
        </>
    )
};