import React, {useState, useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import Axios from 'axios';


function Formdata2() {
  
    const[fb_list, setfb_List] = useState([]);
  
    useEffect(()=>{
      Axios.get("http://localhost:4001/api/get").then((response)=>{
        setfb_List(response.data)
      })
    }, [])
    
    const delete_item = (cmt) =>{
      Axios.delete(`http://localhost:4001/api/delete/${cmt}`);
      window.location.reload(true);
      alert("cnvideolib deleted")
    }
    return (
        <div className="re">
        <div className="form text-center" >
            <h1>DBMS Data</h1>
            <br/>

            {fb_list.map((val)=>{
              return (
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <p className="card_name">{val.VidId} | {val.CourseID} | {val.Videourl}</p>
                      
                  </div>
                  
                  <div className="card-text">
                   
                    <p className="card_abt">{val.Datecreated}</p>
                    <div className="del" onClick={()=> {delete_item(val.Videourl)}}><DeleteIcon /></div>
                 </div>

                 </div>
                 </div>
              )
              
            })}
            <hr/>
        </div>
        </div>
    )
}

export default Formdata2
