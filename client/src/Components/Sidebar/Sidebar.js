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
            
                <li><Link to="./Itw1"> ITW </Link></li>
                <li><Link to="./Cspp1"> CSPP</Link></li>
                <li><Link to="./Ids1"> IDS</Link></li>
                <li><Link to="./Dbms1"> DBMS</Link></li>
                <li><Link to="./Psc"> PSC</Link></li>
                <li><Link to="./Ads1"> ADS</Link></li>              
                <li><Link to="./Cnf1"> CNF </Link></li>
             
                
               
            </ul>

            
        </div>
        
    )
}

export default Sidebar
