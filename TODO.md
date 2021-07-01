# TODO

# front end

[x] add user profile

# back end

[] s

[x] fix fun call and add jwt there only
[x] add bcrypt
[] sql stored procedure
[x] token session list
[] email check

# extra

[x] minimize code length
[hide show dashboard btn] admin only
[x] find the cause of server crash on login
->resolved

sequlize ORM

<!-- app.get("/convert", (req, res) => {
  var sql = "select * from user_demo";
  sqlQueryExecution(req.params.token, sql, (result) => {
    // console.log(result);
    for (let i = 0; i < 15; i++) {
      console.log(result[i].first_name);
      bcrypt.hash(result[i].pwd, saltRounds, function (err, hash) {
        var sql = `update user_demo set pwd ='${hash}'  where id = '${result[i].id}'`;
        sqlQueryExecution(req.body.token, sql, (result) => {});
      });
    }
  });
}); -->
