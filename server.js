var express = require('express')
var app = express()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var _ = require('lodash');
var configVariable = require('./src/api/apifunction.js');

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}))

function getUserId() {
  var s = new Date().getSeconds().toString()
  return _.random(99, 9999).toString().concat(s)
}

const connection = require('mysql').createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hotel',
});

connection.connect(function(err) {
  if (!err) {
    console.log('Database is connected...')
  } else {
    console.log('Error connecting database ...', err)
  }
})

app.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    connection.query('SELECT * FROM users WHERE users.email=' + "'" + req.body.email + "'", (err, findData, fields) => {
      if (_.isEmpty(findData) == true) {
        res.status(configVariable.apiStatus.unauthorized.statusCode).json({
          message: 'Email not registerd',
          statuscode: configVariable.apiStatus.unauthorized.statusCode,
          responseMessage: configVariable.apiStatus.unauthorized.resmsg
        })
      } else {
        if (findData[0].password != req.body.password) {
          res.status(configVariable.apiStatus.accepted.statusCode).json({
            message: 'Wrong password',
            statuscode: configVariable.apiStatus.accepted.statusCode,
            responseMessage: configVariable.apiStatus.accepted.resmsg
          })
        } else if (findData[0].status != 1) {
          res.status(configVariable.apiStatus.unauthorized.statusCode).json({
            message: 'Email not active',
            statuscode: configVariable.apiStatus.unauthorized.statusCode,
            responseMessage: configVariable.apiStatus.unauthorized.resmsg
          })
        } else {
          res.status(configVariable.apiStatus.ok.statusCode).json({
            message: 'success',
            statuscode: configVariable.apiStatus.ok.statusCode,
            responseMessage: configVariable.apiStatus.ok.resmsg,
            responseCode: findData[0].id,
            loginuser: findData[0].f_name
          })
        }
      }
    })
  } else {
    res.status(configVariable.apiStatus.unauthorized.statusCode).json({
      message: 'FieldEmpty',
      statuscode: configVariable.apiStatus.unauthorized.statusCode,
      responseMessage: configVariable.apiStatus.unauthorized.resmsg
    })
  }
})

app.post('/signup', (req, res) => {
  if (req.body.email && req.body.password && req.body.username) {
    connection.query(`SELECT users.email FROM users WHERE users.email=${req.body.email}`, (err, resultEmail, fields) => {
      if (_.isEmpty(resultEmail) == true) {
        connection.query('INSERT into users(f_name,email,password,user_id,phonenumber,status,address)VALUES("' + req.body.username + '","' + req.body.email + '","' + req.body.password + '","' + getUserId() + '","' + req.body.phonenumber + '","' + req.body.status + '","' + req.body.address + '")', (err1, data, fields1) => {
          res.status(configVariable.apiStatus.ok.statusCode).json({
            message: 'success',
            statuscode: configVariable.apiStatus.ok.statusCode,
            responseMessage: configVariable.apiStatus.ok.resmsg,
            responseCode: findData[0].id,
            loginuser: findData[0].f_name
          });
        });
      } else {
        res.status(configVariable.apiStatus.accepted.statusCode).json({
          message: 'user already signedup',
          statuscode: configVariable.apiStatus.accepted.statusCode,
          responseMessage: configVariable.apiStatus.accepted.resmsg,
          responseCode: findData[0].id,
          loginuser: findData[0].f_name
        });
      }
    });
  }
  res.status(configVariable.apiStatus.unauthorized.statusCode).json({
    message: 'Email not active',
    statuscode: configVariable.apiStatus.unauthorized.statusCode,
    responseMessage: configVariable.apiStatus.unauthorized.resmsg
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
