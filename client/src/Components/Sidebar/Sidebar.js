import React from 'react';
import './Sidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="list-unstyled text-center sidemenu">
            
                <li> ITW </li>
                <li>CSPP</li>
                <li>IDS</li>
                <li>CNF</li>
                <li><Link to="./Psc"> PSC</Link></li>
                <li><Link to="./Formdata"> ADS</Link></li>               
                <li><Link to="./Feedback"> DBMS </Link></li>
             
                
               
            </ul>

            
        </div>
        
    )
}

export default Sidebar
