import React, {useState, useEffect } from 'react'
import './Itww.css'

import Axios from 'axios';

function Itw() {
  

    const[VidId, setVidId] = useState('');
    const[CourseID, setCourseID] = useState('');
    const[Videourl, setVideourl] = useState('');
    const[Urlpdf, setUrlpdf] = useState('');
    const[Description, setDescription] = useState('');
    const[fb_list, setfb_List] = useState([]);
  
    useEffect(()=>{
      Axios.get("http://localhost:4001/Itw2").then((response)=>{
        setfb_List(response.data)
      })
    }, [])
  
    var handleSubmit = () =>{
      Axios.post('http://localhost:4001/Itw2', {VidId: VidId, CourseID: CourseID, Videourl:Videourl, Urlpdf:Urlpdf, Description:Description }).then(()=>{
          alert("success")
      });
      
      setfb_List([...fb_list, {VidId: VidId, CourseID: CourseID, Videourl:Videourl, Urlpdf:Urlpdf,  Description:Description }]);
      console.log(fb_list)
    };
    
    return (
      <div>
        <div className="form text-center" >
            <h1>ITW Form</h1>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
             Upload Data
            </button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body"></div>
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
                        <label>Urlpdf</label>
                        <br/>
                        <input type="text" className="h"  placeholder=" url..." name="Pdfurl" onChange={(e)=>{setUrlpdf(e.target.value)}} required />
                        </div>
                        
              
                        

                        <div>
                        <label> Description</label>
                        <br/>
                        <input type="text" className="m"  placeholder="  Description..." name=" Description" onChange={(e)=>{setDescription(e.target.value)}} required />
                        </div>
      
                        
  
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
<hr/>
</div>
        
      
    )
}

export default Itw

