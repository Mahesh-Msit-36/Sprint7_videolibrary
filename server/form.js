const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'msitvideolibrary'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res)=>{
    const sqlprint = "SELECT * FROM itvideolib"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/api/insert', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const durationmints = req.body.durationmints
    const Datecreated = req.body.Datecreated
    const  Type= req.body.Type
    const Description = req.body.Description

    const sqlInsert = "INSERT INTO itvideolib (VidId, CourseID, Videourl, durationmints, Datecreated, Type, Description) VALUES (?,?,?,?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl, durationmints, Datecreated, Type, Description], (err, result) => {
        console.log(result)
    })
})
app.delete('/api/delete/:fb',(req,res) =>{
    const cmt = req.params.fb;
    const sqlDel = "DELETE From itvideolib where fb = ?";

    db.query(sqlDel, cmt, (err, result) =>{
        console.log(err);
    })
})


app.listen(5001, ()=>{
    console.log("Running...")
})