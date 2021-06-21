import React, {useState, useEffect } from 'react'
import './Feedback.css'
import Axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';

function Feedback() {

    const[user, setName] = useState('');
    const[roll, setRoll] = useState('');
    const[about, setAbout] = useState('');
    const[fb, setFeedback] = useState('');
    const[fb_list, setFBList] = useState([]);
  
    useEffect(()=>{
      Axios.get("http://localhost:3001/feedback/get").then((response)=>{
        setFBList(response.data)
      })
    }, [])
  
    const handleSubmit = () =>{
      Axios.post('http://localhost:4001/feedback/insert', {user: user, roll: roll, about: about, fb: fb})
      alert("Feedback added")
      setFBList([...fb_list, {user: user, roll: roll, about: about, fb: fb}]);
      console.log(fb_list)
    };

    const delete_item = (cmt) =>{
        Axios.delete(`http://localhost:4001/api/delete/${cmt}`);
        window.location.reload(true);
        alert("Feedback deleted")
    }
    
    return (
        <div className="form">
            <h2>Feedback form</h2>
            <form onSubmit={handleSubmit} className="form_fill">
                <div className="row">
                    <div className="col-12 col-sm-5 form-group name">
                        <label>Name</label>
                        <input type="text" className="form-control" id="uname" placeholder="Enter Name" name="name" onChange={(e)=>{setName(e.target.value)}} required />
                    </div>

                    <div className="col-12 col-sm-5  form-group roll">
                        <label>Roll No.</label>
                        <input type="text" className="form-control" id="fname" placeholder="Enter Roll No." name="roll" onChange={(e)=>{setRoll(e.target.value)}} required />
                    </div>
                    <div className="col-12 col-sm-5">
                        <label>About</label>
                        <select name="cars" className="custom-select mb-3" onChange={(e)=>{setAbout(e.target.value)}} required>
                            <option selected>Choose...</option>
                            <option value="General">General</option>
                            <option value="IT">IT</option>
                            <option value="SS">Soft Skills</option>
                        </select>
                    </div>
                </div><br/>

                <div className="form-group">
                    <label>Feedback</label>
                    <textarea type="text" className="form-control" id="fb" placeholder="Feedback..." name="fb" onChange={(e)=>{setFeedback(e.target.value)}} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr/>

            <div className="card fblist">
                <p>Feedbacks</p>
            </div>

            {fb_list.map((val)=>{
                return (
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <p className="card_name">{val.user} | {val.roll}</p>
                                <div className="del" onClick={()=>delete_item(val.fb)}><DeleteIcon /></div>
                            </div>
                    
                            <div className="card-text">
                                <p>{val.fb}</p>
                                <p className="card_abt">{val.about}</p>
                            </div>
                            
                        </div>
                    </div>
                    )
                })}
            <hr/>
        </div>
    )
}

export default Feedback
