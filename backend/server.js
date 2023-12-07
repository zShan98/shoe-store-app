const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(express.json());

app.use(cors());

// ---------------------------------------- DB Connection ------------------------------------

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "on_campus_kicks",
});

// ---------------------------------------- DB Creation ------------------------------------

// app.get("/db_create", (req, res) => {
//   let sql = "CREATE DATABASE On_Campus_Kicks";

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database Created");
//   });
// });

// ---------------------------------------- Orders CRUD ------------------------------------

app.post("/order_add", (req, res) => {
  // const { cid, Delivery, price, O_status, O_Timedate } = req.body;

  const sql = `
    INSERT INTO orders (cid, delivery, price, O_status, O_Timedate) VALUES (?)`;

  const values = [
    req.body.cid,
    req.body.delivery,
    req.body.price,
    req.body.O_status,
    req.body.O_Timedate,
  ];
  db.query(sql, [values], (err, date) => {
    if (err) return res.json("ERROR");
    return res.json(data);
  });
});

app.get("/order_read", (req, res) => {
  const sql = "SELECT * FROM Orders";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
  //res.json("Hello from Backend");
});

app.post("/order_update", (req, res) => {
  const sql = `UPDATE orders SET O_status = (?) where cid = (?)`;

  const values = [req.body.O_status, req.body.cid];
  db.query(sql, [values], (err, date) => {
    if (err) return res.json("ERROR");
    return res.json(data);
  });
});

// ---------------------------------------- Customers CRUD ------------------------------------

app.get("/customers_read", (req, res) => {
  const sql = "SELECT * FROM customer";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
  //res.json("Hello from Backend");
});

// ---------------------------------------- Products CRUD ------------------------------------

app.post("/product_add", (req, res) => {
  const sql =
    "INSERT INTO product (`ptitle`, `pdesc` ,`pprice` , `pimage`) VALUES (?)";
  const values = [
    req.body.ptitle,
    req.body.pdesc,
    req.body.pprice,
    req.body.pimage,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/product_read", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
  //res.json("Hello from Backend");
});

app.put("/product_update", (req, res) => {
  const sql =
    "Update Product ptitle= ? pdesc = ? pprice = ? pimage = ? WHERE pid = ?";
  const values = [
    req.body.ptitle,
    req.body.pdesc,
    req.body.pprice,
    req.body.pimage,
    req.body.pid,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(8085, () => {
  console.log("listening");
});

// // update
// app.put("/update/:id", (req, res) => {
//   const sql =
//     "UPDATE product ptitle = ? pdesc= ? pprice = ? pimage =? WHERE pid = ?";
//   const values = [
//     req.body.ptitle,
//     req.body.pdesc,
//     req.body.pprice,
//     req.body.pimage,
//   ];
//   const id = req.params.pid;
//   db.query(sql, [...values, id], (err, data) => {
//     if (err) return res.json("Error");
//     return res.json(data);
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
// app.get("/create", (res, req) => {
//   let sql = `CREATE TABLE IF NOT EXISTS Customer(
//         cid varchar(10),
//         Fname varchar(10),
//         Lname varchar(10),
//         email varchar(20),
//         address varchar(50),
//         phone int(12),
//         sid varchar(10))`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Customer Table Created");
//   });
// });

//product
// app.get("/create", (res, req) => {
//   let sql = `CREATE TABLE IF NOT EXISTS Product(
//           pid int(10),
//           ptitle varchar(10),
//           p_desc Text,
//           p_image BLOB)`;
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
