import React from 'react';
import './Rightsidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Rightsidebar() {
    return (
        <div className="sidebar">
            <ul className="list-unstyled text-center sidemenu">
            
                <li>ITW</li>
                <li>CSPP</li>
                <li>IDS</li>
                <li>CNF</li>
                <li> <Link to="/Psc1"> PSC </Link></li>
                <li> <Link to="/Feedback2"> ADS </Link> </li>
                <li><Link to="/Formdata2"> DBMS</Link></li>
             
                
               
            </ul>

            
        </div>
        
    )
}

export default Rightsidebar
