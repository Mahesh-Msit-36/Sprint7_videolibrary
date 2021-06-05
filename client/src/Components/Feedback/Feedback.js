import React, {useState, useEffect } from 'react'
import './Feedback.css'

import Axios from 'axios';

function Cn() {
  

    const[VidId, setVidId] = useState('');
    const[CourseID, setCourseID] = useState('');
    const[Videourl, setVideourl] = useState('');
    const[durationmints, setdurationmints] = useState('');
    const[ Datecreated, setDatecreated] = useState('');
    const[Type, setType] = useState('');
    const[Description, setDescription] = useState('');
    const[fb_list, setfb_List] = useState([]);
  
    useEffect(()=>{
      Axios.get("http://localhost:4001/api/get").then((response)=>{
        setfb_List(response.data)
      })
    }, [])
  
    var handleSubmit = () =>{
      Axios.post('http://localhost:4001/api/insert', {VidId: VidId, CourseID: CourseID, Videourl:Videourl, durationmints:durationmints, Datecreated:Datecreated, Type:Type, Description:Description }).then(()=>{
          alert("success")
      });
      
      setfb_List([...fb_list, {VidId: VidId, CourseID: CourseID, Videourl:Videourl, durationmints:durationmints, Datecreated:Datecreated, Type:Type, Description:Description }]);
      console.log(fb_list)
    };
    
    return (
        
        <div className="form text-center" >
            <h1>DBMS Form</h1>
            <form onSubmit={handleSubmit} className="form_fill">
                        <div>
                          
                        <label> VidId </label>
                        <br/>
                        <input type="text" className="f"  placeholder="VidId..." name="VidId" onChange={(e)=>{setVidId(e.target.value)}} required />
                        </div>
                       

                       <div>
                        <label>CourseID</label>
                        <br/>
                        <input type="text" className="g"  placeholder=" CourseID..." name="CourseID" onChange={(e)=>{setCourseID(e.target.value)}} required />
                        </div>
                        

                        <div>
                        <label>Videourl</label>
                        <br/>
                        <input type="text" className="h"  placeholder=" Videourl..." name="Videourl" onChange={(e)=>{setVideourl(e.target.value)}} required />
                        </div>
                        
                        
                        <div>
                        <label>Durationmints </label>
                        <br/>
                        <input type="text" className="j"  placeholder=" durationmints..." name="durationmints" onChange={(e)=>{setdurationmints(e.target.value)}} required />
                        </div>
                        
                        
                        <div>
                        <label>Date created </label>
                        <br/>
                        <input type="date" className="k"  placeholder=" Datecreated..." name="Datecreated" onChange={(e)=>{setDatecreated(e.target.value)}} required />
                        </div>
                        
                        
                        <div>
                        <label>Type</label>
                        <br/>
                        <input type="text" className="l"  placeholder=" Type..." name="Type" onChange={(e)=>{setType(e.target.value)}} required />
                        </div>
                        

                        <div>
                        <label> Description</label>
                        <br/>
                        <input type="text" className="m"  placeholder="  Description..." name=" Description" onChange={(e)=>{setDescription(e.target.value)}} required />
                        </div>
      
                        
  
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            
            <hr/>
        </div>
      
    )
}

export default Cn

