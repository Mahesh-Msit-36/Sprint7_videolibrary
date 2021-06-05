import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'popper.js/dist/popper.min.js'
import 'jquery/dist/jquery.min.js';

import './Navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                <Link to="/#"><label className="navbar-brand logo">MSITube</label></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto text-center menu">
                        <Link to="/Home"><li className="nav-item"><HomeIcon /> Home</li></Link>
                        <Link to="/Placements"><li className="nav-item"><BusinessIcon />About</li></Link>
                        <Link to="#"><li className="nav-item"><FileCopyIcon /> Data</li></Link>
                        <Link to="/Login"><li className="nav-item"><ExitToAppIcon /> Login</li></Link>
                        <Link to="/Signup"><li className="nav-item"><ExitToAppIcon /> Signup</li></Link>
                    </ul>
                </div>  
            </nav>
        </div>
    )
}

export default Navbar