const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'coursedata'
})

//cnf//
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/cnf', (req, res)=>{
    const sqlprint = "SELECT * FROM cnfdata"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/cnf', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const Description = req.body.Description

    const sqlInsert = "INSERT INTO cnfdata (VidId, CourseID, Videourl, Description) VALUES (?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl, Description], (err, result) => {
        console.log(result)
    })
})


//itw//


app.get('/Itw2', (req, res)=>{
    const sqlprint = "SELECT * FROM itwdata"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/Itw2', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const Urlpdf = req.body.Urlpdf

    const Description = req.body.Description

    const sqlInsert = "INSERT INTO itwdata (VidId, CourseID, Videourl, Urlpdf, Description) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl, Urlpdf,  Description], (err, result) => {
        console.log(result)
    })
})



/////
app.get('/getFile', (req, res) => {
    const {email, courseid, filename} = req.query;
    console.log(email);
    console.log(courseid);
    console.log(filename);

    var filePath = `${__dirname}`+'/uploads/'+`${filename}`;

    fs.readFile(filePath , function (err,data){
        console.log(data);
        res.contentType("application/pdf");
        res.send(data);

    });

});
////































//psc//

app.get('/Psc1', (req, res)=>{
    const sqlprint = "SELECT * FROM pscdata"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/Psc1', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const Description = req.body.Description

    const sqlInsert = "INSERT INTO pscdata (VidId, CourseID, Videourl,  Description) VALUES (?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl,  Description], (err, result) => {
        console.log(result)
    })
})


//dbms//


app.get('/Dbms2', (req, res)=>{
    const sqlprint = "SELECT * FROM dbmsdata"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/Dbms2', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const Description = req.body.Description

    const sqlInsert = "INSERT INTO dbmsdata (VidId, CourseID, Videourl, Description) VALUES (?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl,  Description], (err, result) => {
        console.log(result)
    })
})


//cspp//
app.get('/cspp', (req, res)=>{
    const sqlprint = "SELECT * FROM csppdata"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/cspp', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const Description = req.body.Description

    const sqlInsert = "INSERT INTO csppdata (VidId, CourseID, Videourl,  Description) VALUES (?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl,  Description], (err, result) => {
        console.log(result)
    })
})



//ads//


app.get('/Ads2', (req, res)=>{
    const sqlprint = "SELECT * FROM adsdata"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/Ads2', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const Description = req.body.Description

    const sqlInsert = "INSERT INTO adsdata (VidId, CourseID, Videourl,  Description) VALUES (?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl,  Description], (err, result) => {
        console.log(result)
    })
})




//ids//



app.get('/Ids2', (req, res)=>{
    const sqlprint = "SELECT * FROM idsdata"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/Ids2', (req, res)=>{

    const VidId = req.body.VidId
    const CourseID = req.body.CourseID
    const Videourl = req.body.Videourl
    const Description = req.body.Description

    const sqlInsert = "INSERT INTO idsdata (VidId, CourseID, Videourl,Description) VALUES (?,?,?,?)"
    db.query(sqlInsert, [VidId, CourseID, Videourl, Description], (err, result) => {
        console.log(result)
    })
})



// Search page
app.get('/search', (req, res)=>{    

    const sqlprint = "SELECT * FROM dbms UNION SELECT * FROM cspp UNION SELECT * FROM ads UNION SELECT * FROM itvideolib UNION SELECT * FROM idsvideo UNION SELECT * FROM cnvideolib UNION SELECT * FROM psc"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        // console.log(result)
    });
})

// Feedback

app.get('/feedback/get', (req, res)=>{    
    const sqlprint = "SELECT * FROM feedback"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/feedback/insert', (req, res)=>{

    const user = req.body.user
    const roll = req.body.roll
    const about = req.body.about
    const fb = req.body.fb

    const sqlInsert = "INSERT INTO feedback (user, roll, about, fb) VALUES (?,?,?,?)"
    db.query(sqlInsert, [user, roll, about, fb], (err, result)=>{
        console.log(result)
    })
})

app.delete('/api/delete/:fb', (req, res)=>{
    const cmt = req.params.fb;
    const sqlDel = "DELETE FROM feedback WHERE fb = ?";

    db.query(sqlDel, cmt, (err, result)=>{
        console.log(err);
    })
})

// Sign In

app.post('/user/register', (req, res)=>{

    const student = req.body.student
    const username = req.body.username
    const password = req.body.password

    const sqlInsert = "INSERT INTO userlist (student, username, password) VALUES (?,?,?)"
    db.query(sqlInsert, [student, username, password], (err, result)=>{
        console.log(result)
    })
})

//login//

app.post('/user/login', (req, res)=>{

    const username = req.body.username
    const password = req.body.password

    const sqlSelect = "SELECT * FROM userlist WHERE username = ? AND password = ?"
    db.query(sqlSelect, [username, password], (err, result)=>{
        
        if (err){
            res.send({err: err})
        }

        if (result.length>0){
            res.send({message:""});
        } else {
            res.send({message: "Wrong username or password."});
        }
    })
})




















app.listen(4001, ()=>{
    console.log("Running...")
})