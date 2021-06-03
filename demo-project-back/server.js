const express = require("express");
const app = express();
const mysql = require('mysql');

// jwt
// const jwt = require("jsonwebtoken");
// const jwtKey = "my_secret_key";
// const jwtExpirySeconds = 300;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');


    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


//db connection setup
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql123pwd',
    database: 'mytestdb'
});

const PORT = process.env.PORT || 3000;

// init connection

con.connect((err) => {
    if (err) throw err;
    console.log("connected");
});







// read data

app.get('/api/getalluser', (req, res) => {
    var sql = "select * from user_demo";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// validate user
app.get('/api/loguser/:email&:pwd', (req, res) => {

    var sql = `select * from user_demo where email='${req.params.email}' and pwd=${req.params.pwd}`;
    con.query(sql, (err, result) => {
        if (err) res.json(null);
        else {
            result['status'] = 200;
            res.json(result);
        }
        console.log(result)
    });
});


// add user db
app.post('/api/adduser', (req, res) => {
    
    var sql = 'insert into user_demo(first_name,last_name,email,is_active,is_admin,pwd,dob) values(?)';
    var values = [req.body.first_name, req.body.last_name, req.body.email, 1, 0, req.body.pwd, req.body.dob];
    con.query(sql, [values], (err, result) => {
        if (err) throw err;
        con.query(`select * from user where id = ${result.insertId}`, (err, result) => {
            console.log(result)
            res.json(result);
        });

    });
});

//update user
app.post('/api/disableUser', (req, res) => {
    
    var sql = `update user_demo set is_active ='${req.body.isactive}'  where id = '${req.body.id}'`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/api/adddevice', (req, res) => {
    var sql = 'insert into device1(brand,model,type) values(?)';
    var values = [req.body.brand, req.body.model, req.body.type];
    con.query(sql, [values], (err, result) => {
        if (err) throw err;
        con.query(`select * from device1 where id = ${result.insertId}`, (err, result) => {
            console.log(result)
            res.json(result);
        });

    });
});


app.get('/api/getalldevice', (req, res) => {
    var sql = "select * from device1";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/api/assigndevice',(req,res)=>{
    var sql = `update user_demo set device ='${req.body.deviceId}'  where id = '${req.body.id}'`
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
})

app.post('/api/removedevice',(req,res)=>{
    var sql = `update user_demo set device = null where id = '${req.body.id}'`
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
})

app.get('/api/getuserdevice/:id',(req,res)=>{
    var sql = `SELECT user_demo.first_name, user_demo.email, device1.brand, device1.model 
        FROM user_demo
        LEFT JOIN device1 ON
        user_demo.device=device1.id
        where user_demo.id = ${req.params.id}`
        con.query(sql,(err,result)=>{
            if(err) throw err
            console.log(result)
            res.json(result)

        })
})


const server = app.listen(PORT, () => {
    console.log(`listning on ${PORT}`)
})