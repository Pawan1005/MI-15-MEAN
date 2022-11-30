// Plugins

const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
var Express = require("express");
var multer = require("multer");
var bodyParser = require("body-parser");
const mysql = require("mysql2");
const ejs = require("ejs");
const { get } = require("http");
var http = require("http");
var fs = require("fs");
const route = require("color-convert/route");
const { outer } = require("express");
const { homedir } = require("os");
var moment = require("moment");
let alert = require("alert");
const popup = require('node-popup');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

router.get("/", function (req, res) {
  res.render("home.ejs");
});
router.get("/login", function (req, res) {
  res.render("login.ejs",{
    val: false,
    title: "",
  });
 
});
router.get("/signup", function (req, res) {
  res.render("signup.ejs", {
    title: "Sign Up",
  });
});
router.get("/user_edit", function (req, res) {
  res.render("user_edit.ejs");
});
router.get("/prop_add", function (req, res) {
  res.render("prop_add.ejs");
});

// Property pages routing

router.get("/messages", function (req, res) {
  res.render("home.ejs");
});
router.get("/setting", function (req, res) {
  res.render("home.ejs");
});
router.get("/signout", function (req, res) {
  res.render("login.ejs");
});

// var publicDir = require("path").join(__dirname, "/public");

//Injecting CSS and Images in webpage
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/Images"));
app.use(express.static(__dirname + "/scripts"));

//established server
http.createServer(function (req, res) {
  fs.readFile("home.ejs", function (err, html) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  });
});

//test the server on port 5000
app.use("/", router);
app.listen(process.env.port || 5000);
console.log("runing at port 5000");

//database connection
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "buyout",
});

//test the connection
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection Successfull");
});

//writing a middleware to setup view engine
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, '/'));

//render the user_index page
app.get("/user_index", (req, res) => {
  let sql = "select * from owner";
  let qry = connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.render("user_index.ejs", {
      titles: "Edit User",
      users: rows,
    });
  });
});

//render add page - user_add
app.get("/addrecord", (req, res) => {
  res.render("signup.ejs", {
    title: "Add Property Owner",
  });
});

//after user clicks on create account button - insert the record in table
app.post("/save", (req, res) => {
  let data = {
    srno: req.body.srno,
    owner_name: req.body.owner_name,
    email: req.body.email,
    pass: req.body.pass,
    confirm_pass: req.body.confirm_pass,
    dob: req.body.dob,
    gender: req.body.gender,
  };
  let sql = "INSERT INTO owner SET ?";
  let qry = connection.query(sql, data, (err, rows) => {
    if (err) throw err;
    res.redirect("/login");
  });
});

//after the user clicks on edit button
app.get("/edit/:srno", (req, res) => {
  const userrNo = req.params.srno;
  let sql = "SELECT * FROM owner WHERE srno = ?";
  let qry = connection.query(sql, [userrNo], (err, rows) => {
    if (err) throw err;
    res.render("user_edit.ejs", {
      user: rows[0],
    });
  });
});

//after user clicks on save button of user edit page - update the record
app.post("/save_edit", (req, res) => {
  let sql =
    "UPDATE owner set owner_name = ?, email = ?, pass = ?, confirm_pass = ?, dob = ?, gender = ?  where srno = ?";
  let qry = connection.query(
    sql,
    [
      req.body.owner_name,
      req.body.email,
      req.body.pass,
      req.body.confirm_pass,
      req.body.dob,
      req.body.gender,
    ],
    (err, rows) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

//after the user clicks on delete button
app.get("/delete/:srno", (req, res) => {
  let sql = "DELETE FROM owner WHERE srno = ?";
  let qry = connection.query(sql, [req.params.srno], (err, rows) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//Property Details Crud

//render add page - prop_add
app.get("/add_property", (req, res) => {
  res.render("prop_add.ejs", {
    oname: localStorage.getItem("oname")
  });
});

//after user clicks on save button - insert the record in table
app.post("/add_detail", (req, res) => {
  let data = {
    srno: req.body.srno,
    owner_name: req.body.owner_name,
    mobile_no: req.body.mobile_no,
    property_type: req.body.property_type,
    preferred_tenant: req.body.preferred_tenant,
    parking: req.body.parking,
    availability: req.body.availability,
    posted_on: req.body.posted_on,
    furnishing_status: req.body.furnishing_status,
    floor: req.body.floor,
    gated_security: req.body.gated_security,
    textarea: req.body.textarea,
    status: "N",
  };
  let sql = "INSERT INTO propdetails SET ?";
  let qry = connection.query(sql, data, (err, rows) => {
    if (err) throw err;
    res.redirect("/properties");
  });
});

//Total property count on dashboard

app.post("/dashboard", (req, res) => {
  let sql =
    "select count(*) as count, owner_name from owner where email = ? and pass = ?" ;
  let qry = connection.query(
    sql,[req.body.username, req.body.pass],
    (err, rows) => {
      if (rows[0].count == 1)
      {  let sql = "select COUNT(srno) as Count from propdetails where status = 'N'";
      let qry = connection.query(sql, (err, col) => {
        if (err) throw err;
        localStorage.setItem("oname",rows[0].owner_name);
        res.render("dashboard.ejs", {
          oname: rows[0].owner_name,
          count: col[0].Count,
        });
      });
    } 
    else{
      res.render("login", {
        title: "Invalid Username or Password",
        val : true,
      }); 
     };       
    }
  );
 
});

app.get("/dashboard", (req, res) => {
      let sql = "select COUNT(srno) as Count from propdetails where status = 'N'";
      let qry = connection.query(sql, (err, col) => {
        if (err) throw err;
        res.render("dashboard.ejs", {
          oname: localStorage.getItem("oname"),
          count: col[0].Count,
        });
      });
    }); 
  
//after the user clicks on edit button
app.get("/editprop/:srno", (req, res) => {
  const userrNo = req.params.srno;
  let pType = ["Appartment","Standalone","Villa"];
  let pTenant = ["Family","Bachelor","Both"];
  let pParking = ["2 Wheeler","4 Wheeler","Both"];
  let pFurnish = ["Furnished","Unfurnished"];
  let sql = "SELECT * FROM propdetails WHERE srno = ?";
  let qry = connection.query(sql, [userrNo], (err, rows) => {
    if (err) throw err;
    res.render("prop_edit.ejs", {
      prop: rows[0],
      editvalue: userrNo,
      oname: localStorage.getItem("oname"),
      title: "Edit Property Details",
      type: pType,
      tenant: pTenant, 
      parking: pParking,
      furnish: pFurnish
    });
  });
});

//render the properties page
app.get("/properties", (req, res) => {
  let sql = "SELECT * FROM propdetails where status = 'N'";
  let qry = connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.render("properties", {
      props: rows,
      title: "Edit Property Details",
      oname: localStorage.getItem("oname"),
      moment: moment,
    });
  });
});

//after user clicks on save button of property edit page - update the record
app.post("/edit_detail", (req, res) => {
  let sql =
    "UPDATE propdetails set owner_name = ?, mobile_no = ?, property_type = ?, preferred_tenant = ?, parking = ?, availability = ?, posted_on = ?, furnishing_status = ?, gated_security = ?, textarea = ? where srno = ?";
  let qry = connection.query(
    sql,
    [
      req.body.owner_name,
      req.body.mobile_no,
      req.body.property_type,
      req.body.preferred_tenant,
      req.body.parking,
      req.body.availability,
      req.body.posted_on,
      req.body.furnishing_status,
      req.body.gated_security,
      req.body.textarea,
      req.body.srno,
    ],
    (err, rows) => {
      if (err) throw err;
      res.redirect('/properties');
    }
  );
});

//after the user clicks on delete button
app.get("/deleteprop/:srno", (req, res) => {
  let sql = "Update propdetails set status = 'Y' WHERE srno = ?";
  let qry = connection.query(sql, [req.params.srno], (err, rows) => {
    if (err) throw err;
    alert("Successfully Deleted Property Details.");
    res.redirect("/properties")
  });
});


