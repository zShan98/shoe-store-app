const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "on_campus_kicks",
});

app.get("/", (req, res) => {
  // const sql = "SELECT * FROM Orders";
  // db.query(sql, (err, data) => {
  //   if (err) return res.json("Error");
  //   return res.json(data);
  // });
  res.json("Hello from Backend");
});






// app.post('/create', (req,res)=> {
//     const sql = "INSERT INTO contact (`Name`, `Email` ,`Subject` , `Message`) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.subject,
//         req.body.message
//     ]
//     db.query(sql,[values], (err, data) =>{
//         if(err) return res.json("Error");
//         return res.json(data);
//     })

// })

// app.get("/create", (req, res) => {
//   let sql = "CREATE DATABASE On_Campus_Kicks";

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database Created");
//   });
// });

//tables creation
// seller table
// app.get("/create", (res, req) => {
//   let sql =
//     "CREATE TABLE IF NOT EXISTS Seller (sid varchar(10),Fname varchar(10),Lname varchar(10),email varchar(20),password varchar(10),phone int(12))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Seller Table Created");
//   });
//  });
//customer
app.get("/create", (res, req) => {
  let sql = `CREATE TABLE IF NOT EXISTS Customer(
        cid varchar(10),
        Fname varchar(10),
        Lname varchar(10),
        email varchar(20),
        address varchar(50),
        phone int(12),
        sid varchar(10))`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Customer Table Created");
  });
});

//product
// app.get("/create", (res, req) => {
//   let sql = `CREATE TABLE IF NOT EXISTS Product(
//           pid varchar(10),
//           pname varchar(10),
//           p_desccription Text,
//           p_image Text,
//           cat_id varchar(10),
//           sid varchar(10))`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     console.log("Product Table Created");
//   });
// });

// app.get("/create", (res, req) => {
//   let sql = `CREATE TABLE IF NOT EXISTS Orders (
//             oid varchar(10),
//             deleivery varchar(10),
//             cid varchar(10))`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     console.log("Order Table Created");
//   });
// });

// app.get("/create", (res, req) => {
//   let sql = `CREATE TABLE IF NOT EXISTS CustomerHelp (
//             cid varchar(11),
//             subject Text,
//             message Text)`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     console.log("CustomerHelp Table Created");
//   });
// });

app.listen(8085, () => {
  console.log("listening");
});
