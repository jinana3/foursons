var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var  PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Customer Creation
var reservationList = [];
var waitList = [];

// createReservation();

function createReservation(newCustomer){

  var name = newCustomer.name;
  
  var phone = newCustomer.phone;
  
  var email = newCustomer.email;
  function CustomerConst(name, phone, email){

    this.name = name;
    this.phone = phone;
    this.email = email;
  
  }

  var newCustomer = new CustomerConst(newCustomer);
  

  // var oscar = new CustomerConst("oscar", "123" , "oscar@gmail.com");


  if (reservationList.length == 5){

  waitList.push(newCustomer);

  
  console.log("this is the wait list" + waitList);

  }else{
    reservationList.push(newCustomer);
  }
  console.log("this is the reservation list" + JSON.stringify(reservationList));

}





//Routing -- GET

app.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {

  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("\/tables", function(req, res) {

  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/waitlist", function(req, res) {

  res.json(waitList);
});

app.get("/api/reservationList", function(req, res) {

  res.json(reservationList);
});

// Routing -- POST

app.post("/api/new", function(req, res) {

  var newCustomer = req.body;
  createReservation(newCustomer);
  res.json();//this is just testing
});

//Routing - POST
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
