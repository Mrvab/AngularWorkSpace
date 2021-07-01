const express = require("express");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// jwt
const jwt = require("jsonwebtoken");
const jwtKey = "a23oapowqiu218971lke0in3iludc4w8oia8u4jq9D7J57JI3QYHF63T78";
const jwtExpirySeconds = 604800; //7days

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

//db connection setup
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql123pwd",
  database: "mytestdb",
});

const PORT = process.env.PORT || 3000;

// init connection

con.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

// read data
app.get("/api/getalluser/:token", (req, res) => {
  var sql = "call get_all_user()";
  sqlQueryExecution(req.params.token, sql, (result) => {
    console.log(result[0].length);
    for (let i = 0; i < result[0].length; i++) {
      var getdev = `call get_assign_device('${result[0][i].id}')`;
      sqlQueryExecution(req.params.token, getdev, (devdata) => {
        for (data in devdata[0]) {
          console.log(data);
        }
        // result[0][i][
        //   "device"
        // ] =
        // console.log("........", devdata[0].length);
      });
    }
    res.json(result[0]);
  });
});

// validate user
app.get("/api/loguser/:email&:pwd", (req, res) => {
  var sql = `call get_user_by_email('${req.params.email}')`;
  con.query(sql, (err, result) => {
    if (err) res.json(null);
    else {
      //gen jwt token on login
      if (result[0] != "") {
        bcrypt
          .compare(req.params.pwd, result[0][0].pwd)
          .then(function (pwdmatch) {
            if (pwdmatch == true) {
              let username = req.params.email;
              const token = jwt.sign({ username }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
              });
              var sql = `insert into token_list(token_number) values('${token}')`;
              sqlQueryExecution(token, sql, (tokenadd) => {
                //
              });
              result[0][0].token = token;
              res.json(result[0]);
            } else res.json(null);
          });
      } else res.json(null);
    }
  });
});

// add user db
app.post("/api/adduser", (req, res) => {
  bcrypt.hash(req.body.pwd, saltRounds, function (err, hash) {
    var sql = `call add_user('${req.body.first_name}','${req.body.last_name}','${req.body.email}','${hash}','${req.body.dob}')`;
    sqlQueryExecution(req.body.token, sql, (result) => {
      res.json(result);
    });
  });
});

//update user
app.post("/api/disableUser", (req, res) => {
  var sql = `call on_off_user('${req.body.isactive}','${req.body.id}')`;
  sqlQueryExecution(req.body.token, sql, (result) => {
    res.json(result[0]);
  });
});

app.post("/api/adddevice", (req, res) => {
  var sql = `call add_device('${req.body.brand}','${req.body.model}','${req.body.type}')`;
  sqlQueryExecution(req.body.token, sql, (result) => {
    res.json(result);
  });
});

app.get("/api/getalldevice/:token", (req, res) => {
  var sql = "call get_all_device";
  sqlQueryExecution(req.params.token, sql, (result) => {
    res.json(result[0]);
  });
});

app.post("/api/assigndevice", (req, res) => {
  var sql = `call assign_device('${req.body.id}','${req.body.deviceId}');`;
  sqlQueryExecution(req.body.token, sql, (result) => {
    res.json(result[0]);
  });
});

app.post("/api/removedevice", (req, res) => {
  var sql = `call remove_device('${req.body.id}')`;
  sqlQueryExecution(req.body.token, sql, (result) => {
    res.json(result);
  });
});

app.get("/api/getuserdevice/:id&:token", (req, res) => {
  var sql = `call get_assign_device( '${req.params.id}')`;
  sqlQueryExecution(req.params.token, sql, (result) => {
    res.json(result[0]);
  });
});

app.get("/api/getsorteddata/:col&:type&:token", (req, res) => {
  var sql = `SELECT * from user_demo ORDER BY ${req.params.col} ${req.params.type}`;
  sqlQueryExecution(req.params.token, sql, (result) => {
    res.json(result);
  });
});

// verify token

tokenVerify = (oldtoken) => {
  try {
    verifytoken = jwt.verify(oldtoken, jwtKey);
    return verifytoken;
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return false;
    }
  }
};

app.post("/api/userprofileedit", (req, res) => {
  var sql = `select * from user_demo where id=${req.body.id}`;
  sqlQueryExecution(req.body.token, sql, (result) => {
    var fname = req.body.fname ? req.body.fname : result[0].first_name;
    var lname = req.body.lname ? req.body.lname : result[0].last_name;
    var email = req.body.email ? req.body.email : result[0].email;
    var dob = req.body.dob ? req.body.dob : result[0].dob;
    var sql = `update user_demo set first_name='${fname}', last_name='${lname}'
      ,email='${email}',dob='${dob}' where id = '${req.body.id}'`;
    sqlQueryExecution(req.body.token, sql, (result) => {
      res.json(result);
    });
  });
});

//TODO implement all sql task using this function
sqlQueryExecution = (token, sql, callback) => {
  if (tokenVerify(token) || token == undefined) {
    con.query(sql, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(result);
      }
    });
  } else {
    callback({
      status: 401,
      msg: "Unaurthorized access",
    });
  }
};

const server = app.listen(PORT, () => {
  console.log(`listning on ${PORT}`);
});
