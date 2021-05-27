const express = require("express");
const app = express();
const mysql = require('mysql');

// jwt
// const jwt = require("jsonwebtoken");
// const jwtKey = "my_secret_key";
// const jwtExpirySeconds = 300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');


    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


//db connection setup
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Mysql123pwd',
    database : 'mytestdb'
});

const PORT = process.env.PORT|| 3000;

// init connection

con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
});







// read data

app.get('/api/getalluser',(req,res)=>{
    var sql = "select * from user_demo";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});

// validate user
app.get('/api/loguser/:email&:pwd',(req,res)=>{

    var sql = `select * from user_demo where email='${req.params.email}' and pwd=${req.params.pwd}`;
    con.query(sql,(err,result)=>{
        if(err) res.json(null);
        else{
            result['status']=200;
        res.json(result);
        }
        console.log(result)
    });
});


// add user db
app.post('/api/adduser',(req,res)=>{
    console.log("hit add")
    var sql = 'insert into user_demo(first_name,last_name,email,is_active,is_admin,pwd,dob) values(?)';
    var values = [req.body.first_name,req.body.last_name,req.body.email,1,0,req.body.pwd,req.body.dob];
    con.query(sql,[values],(err,result)=>{
        if(err) throw err;
        con.query(`select * from user where id = ${result.insertId}`,(err,result)=>{
            console.log(result)
            res.json(result);
        });
        
    });
});

//update user
app.post('/api/disableUser',(req,res)=>{
    console.log(req.body.isactive,req.body.id)
    var sql = `update user_demo set is_active ='${req.body.isactive}'  where id = '${req.body.id}'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});


const server = app.listen(PORT,()=>{
    console.log(`listning on ${PORT}`);
})