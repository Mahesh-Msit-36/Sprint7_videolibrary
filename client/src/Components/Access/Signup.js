import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Signup.css';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import WarningIcon from '@material-ui/icons/Warning';
import LockIcon from '@material-ui/icons/Lock';


function Signup (){
    const[student, setName] = useState('');
    const[username, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[conpassword, setConPassword] = useState('');
    const[user_list, setUserList] = useState([]);

    // useEffect(()=>{
    //     Axios.get("http://localhost:3002/api/get").then((response)=>{
    //         setUserList(response.data)
    //     })
    //   }, [])

    const handleSubmit = () =>{
        // console.log(user_list, username)
        // for (const i=0; i<user_list.length; i++){
        //     if (user_list[i].includes(username)){
        //         alert("You have already registered.")
        //     }
        //     else{
                if (password == conpassword){
                    Axios.post('http://localhost:4001/user/insert', {student: student, username: username, password: password})
                    alert("Account created.")
                    setUserList([...user_list, {student: student, username: username, password: password}]);
                    console.log(user_list)
                }
                else{
                    alert("Please check your password.")
                }
        //     }   
        // }
    };

    return(
        <div className="signup">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 flex">
                        <div className="icon"><PersonIcon /></div>
                        <input className="form-control" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} type="text" name="fname" required/>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 flex">
                        <div className="icon"><EmailIcon /></div>
                        <input className="form-control" placeholder="Username" onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" required/>    
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 flex">
                        <div className="icon"><LockIcon /></div>
                        <input className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} type="password" name="pw" required/>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 flex">
                        <div className="icon"><WarningIcon /></div>
                        <input className="form-control" placeholder="Confirm Password" onChange={(e)=>{setConPassword(e.target.value)}} type="password" name="pw" required/>
                    </div>
                    <div className="col-sm-3"></div>

                    <div className="col-sm-5"></div>
                    <div className="col-sm-2">
                        <button className="btn btn-link" type="submit">Create account</button>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </form>
        </div>
    )                   
    }

export default Signup
