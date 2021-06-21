import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


import Navbar from './Components/Navbar/Navbar';
//import Pdf from './Components/Pdffiles/Pdf'
import Feedback from './Components/Form/Feedback'
import Login from './Components/Access/Login'
import Signup from './Components/Access/Signup'
import Contact from './Components/Form/Contact'
import Cnf1 from './Components/Cnf/Cnf1'
import Sidebar from './Components/Sidebar/Sidebar';
import Rightsidebar from './Components/Rightside/Rightsidebar';
import Footer from './Components/Footer/Footer';
import Itw1 from './Components/Itw/Itw1'
import Itw2 from './Components/Itw/Itw2'
import Cnf2 from './Components/Cnf/Cnf2'
import Psc from './Components/Pscform/Psc'
import Psc1 from './Components/Pscform/Psc1'
import Dbms1 from './Components/Dbms/Dbms1'
import Dbms2 from './Components/Dbms/Dbms2'
import Cspp1 from './Components/Cspp/Cspp1'
import Cspp2 from './Components/Cspp/Cspp2'
import Ids1 from './Components/Ids/Ids1'
import Ids2 from './Components/Ids/Ids2'
import Ads1 from './Components/Ads/Ads1'
import Ads2 from './Components/Ads/Ads2'
import Datetime from './Components/Date/Datetime'
// import Calendertable from './Components/Calender/Calendertable'

import Home from './Components/Home/Home'
//import Serchbar from './Components/Search/Serchbar'

//import Footer from './Components/Home/Home';

// Import components and paste the js files in the in Component folders.

// import Home from './Components/Body/Home'
// import Placements from './Components/Body/Placements'
//import Feedback from './Components/Form/Feedback'
// import Contact from './Components/Form/Contact'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div className="row">
          <div className="col-12 col-sm-12">
            <Navbar />
            <Datetime/>
            {/* <Calendertable/> */}
            {/* <Pdf/> */}
            
            
          </div>
        
        </div>
        
        
        
        <Switch>
        <div className="row mar">
          
          <Route exact path="/Home">
            <div className="col-12 col-sm-2">
              <Sidebar />                  
              </div>
              <div className="col-12 col-sm-8">
                 <Home />
              </div>

            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
          </Route>


          <Route path="/Feedback">
            <div className="col-12 col-sm-2">
              <Sidebar />
            </div>
            <div className="col-12 col-sm-8">
              <Feedback />
              <Contact />
            </div>

            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
          </Route>



          <Route path="/Login">
            <div className="col-12 col-sm-2">
              <Sidebar />
            </div>
            <div className="col-12 col-sm-8">
              <Login />
              
            </div>

            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
          </Route>





          
          
          <Route path="/Placements">
            <div className="col-12 col-sm-2">
              <Sidebar />
              
            </div>
            <div className="col-12 col-sm-8">
              {/* <Placements /> */}
            </div>

            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
          </Route>
          
          <Route path="/Cnf1">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Cnf1/>
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


              
          <Route path="/Cnf2">

          <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            
            <div className="col-12 col-sm-8">
               <Cnf2 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


          <Route path="/Itw1">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Itw1 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


          <Route path="/Itw2">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Itw2 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


          <Route path="/Psc">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Psc />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


          <Route path="/Psc1">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Psc1 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>




          <Route path="/Dbms1">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Dbms1 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>



          <Route path="/Dbms2">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Dbms2 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>



          <Route path="/Cspp1">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Cspp1 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>




          <Route path="/Cspp2">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Cspp2 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>



          
          <Route path="/Ids1">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Ids1 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>




          <Route path="/Ids2">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Ids2 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>



          <Route path="/Ads1">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Ads1 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


          <Route path="/Ads2">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Ads2 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>     
          
          <Route path="/Signup">
            <div className="col-12 col-sm-2">
              <Sidebar />
              
            </div>
            <div className="col-12 col-sm-8">
              <Signup />
            </div>

            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
          </Route>
        </div>
        </Switch>
        
        
        <div className="row">
          <div className="col-12 col-sm-12">
            <Footer />
          </div>
        </div>
      </Router>
    </div>


  );
}

export default App;