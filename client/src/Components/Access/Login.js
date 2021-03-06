import React, {useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './Login.css'
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import './Signup.css';
import EmailIcon from '@material-ui/icons/Email';
import WarningIcon from '@material-ui/icons/Warning';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

function Login(){

    const[student, setName] = useState('');
    const[username, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[conpassword, setConPassword] = useState('');
    const[user_list, setUserList] = useState([]);

    const[usernameSi, setEmailSi] = useState('');
    const[passwordSi, setPasswordSi] = useState('');

    const[loginStatus, setloginStatus] = useState('');
    const history = useHistory();

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
                    Axios.post('http://localhost:4001/user/register', {student: student, username: username, password: password})
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

    const handleSignIn = () =>{
        Axios.post('http://localhost:4001/user/login', {username: usernameSi, password: passwordSi}).then((response) =>{
            console.log(response)
            if (response.data.message){
                setloginStatus(response.data.message)
                alert("Wrong Username or Password")
            } else {
                setloginStatus(response.data.message)
                history.push("/dashboard");
            }
        })
    }

    return(
        <div className="login">
            <div className="row">

                <div className="col-12 col-sm-5 card">
                    <form onClick={handleSignIn}>
                        <h3><strong>SIGN</strong> <strong className="inup">IN</strong></h3>
                        <div className="username">
                            <div className="icon"><EmailIcon /></div>
                            <input className="form-control" type="email" name="user" placeholder="Username" onChange={(e)=>{setEmailSi(e.target.value)}} required/><br/>
                        </div>

                        <div className="password"> 
                            <div className="icon"><LockIcon /></div>                                                
                            <input className="form-control" type="password" name="pw" placeholder="Password" onChange={(e)=>{setPasswordSi(e.target.value)}} required/><br/>
                        </div>

                        <div className="regbtn">                                 
                            <button id="si" type="button" className="btn">Sign In</button><br/>
                        </div> 
                        {/* <p className="alert">{loginStatus}</p> */}
                    </form>
                </div>

                <div className="col-12 col-sm-5 offset-sm-1 signup card">
                    <form onSubmit={handleSubmit}>
                        <h3><strong>SIGN</strong> <strong className="inup">UP</strong></h3>
                        <div className="flex">
                            <div className="icon"><PersonIcon /></div>
                            <input className="form-control" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} type="text" name="fname" required/>
                        </div>

                        <div className="flex">
                            <div className="icon"><EmailIcon /></div>
                            <input className="form-control" placeholder="Username" onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" required/>    
                        </div>

                        <div className="flex">
                            <div className="icon"><LockIcon /></div>
                            <input className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} type="password" name="pw" required/>
                        </div>

                        <div className="flex">
                            <div className="icon"><WarningIcon /></div>
                            <input className="form-control" placeholder="Confirm Password" onChange={(e)=>{setConPassword(e.target.value)}} type="password" name="pw" required/>
                        </div>

                        <div className="regbtn">
                            <button className="btn btn-link reg" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                    
    )                   
}
const read = (ele) =>{
console.log(ele.target.name);
this.setState({[ele.target.name]:ele.target.value});			
}

const home = () =>{
    if (this.state.user!=="" && this.state.pw!==""){
        window.open("Home.html","_self")
    } else {
        alert("Username or password is missing")
    }
}

export default Login