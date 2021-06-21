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
            
                <li><Link to="/Itw2">ITW </Link></li>
                <li><Link to="./Cspp2"> CSPP</Link></li>
                <li><Link to="./Ids2"> IDS</Link></li>
                <li><Link to="./Dbms2"> DBMS</Link></li>
                <li> <Link to="/Psc1"> PSC </Link></li>
                <li> <Link to="/Ads2"> ADS </Link></li>
                <li> <Link to="/Cnf2"> CNF </Link> </li>
               
             
                
               
            </ul>

            
        </div>
        
    )
}

export default Rightsidebar
