import React, {useState, useEffect } from 'react' 
import Axios from 'axios';


function Cspp2() {
  const [search, setSearch] = useState('')
const[it_list, setit_list] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:4001/cspp").then((response)=>{
      setit_list(response.data)
    })
   }, [])

   return(
    <div>
      <div>
    <div className="search mt-5">
              <input type="text" placeholder="Search..." onChange={event =>{setSearch(event.target.value)}}/>
            {/* <Link to="/Searchbar"> <input type="submit" className="btn btn-primary w-100" value="submit"/></Link> */}
            </div>
            <div className="row">
            {it_list.filter((val)=>{
              if (search == ""){
                  return 
              } else if(val.Description.toLowerCase().includes(search.toLowerCase())) {
                 return val
                   
              }
          }).map((val,key)=>{
            return (
              <div className="col-12 col-sm-4 mt-3">                        
                  <div className="card">
                      <div className="embed-responsive embed-responsive-16by9">
                          <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" allowfullscreen="allowfullscreen"></iframe>
                      </div>

<div className="card-body">
                          <div className="media">
                              
                              <div className="media-body">
                                  <h5 className="mt-0"><span className="badge badge-dark course">{val.CourseID}</span> <span className="badge badge-info course"></span></h5>
                                  <p className="of">{val.Description}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              )
          })}
</div>

<div className="row">
     {it_list.map((val)=>{
      return (
          <div className="col-12 col-sm-4 mt-3">                        
              <div className="card">
                  <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" allowfullscreen="allowfullscreen"></iframe>
                  </div>
                  <div className="card-body">
                      <div className="media">
                       
                          <div className="media-body">
                              <h5 className="mt-0"><span className="badge badge-dark course">{val.CourseID}</span> <span className="badge badge-info course"></span></h5>
                              <p className="of">{val.Description}</p>
                          </div>
                      </div>
                  </div>
              
                  </div>
          </div>
          )
      })}

    </div>
    </div>
    </div>
    
  )
    
}






export default Cspp2
