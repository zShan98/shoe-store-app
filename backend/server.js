const express = require("express");
const cors= require("cors");
const mysql = require("mysql");
const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

app.get("/", (req,res)=> {
    // const sql = "SELECT * FROM student";
    // db.query(sql, (err, data) =>{
    //     if(err) return res.json("Error");
    //     return res.json(data);
    // })
    res.json("Hello from Backend");
})
app.post('/create', (req,res)=> {
    const sql = "INSERT INTO contact (`Name`, `Email` ,`Subject` , `Message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.subject,
        req.body.message
    ]
    db.query(sql,[values], (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(8085, () => {
    console.log("listening");
})
