import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Navbar from './Components/Navbar/Navbar';
import Feedback from './Components/Feedback/Feedback';
import Sidebar from './Components/Sidebar/Sidebar';
import Rightsidebar from './Components/Rightside/Rightsidebar';
import Footer from './Components/Footer/Footer';
import Formdata from './Components/Dataform/Formdata'
import Formdata2 from './Components/Dataform/Formdata2'
import Feedback2 from './Components/Feedback/Feedback2'
import Psc from './Components/Pscform/Psc'
import Psc1 from './Components/Pscform/Psc1'
import Home from './Components/Home/Home'

//import Footer from './Components/Home/Home';

// Import components and paste the js files in the in Component folders.

// import Home from './Components/Body/Home'
// import Placements from './Components/Body/Placements'
//import Feedback from './Components/Form/Feedback'
// import Contact from './Components/Form/Contact'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

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
          
          <Route path="/Feedback">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Feedback />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


              
          <Route path="/Feedback2">

          <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            
            <div className="col-12 col-sm-8">
               <Feedback2 />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


          <Route path="/Formdata">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Formdata />
            </div>
            <div className="col-12 col-sm-2">  
              <Rightsidebar/>    
            </div>
            
          </Route>


          <Route path="/Formdata2">
            <div className="col-12 col-sm-2">
              <Sidebar />            
            </div>
            <div className="col-12 col-sm-8">
               <Formdata2 />
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