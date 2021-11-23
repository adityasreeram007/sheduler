var ex = require("express");
var cors = require("cors");
var bcrypt = require("bcrypt");
var HashFunctions = require("./helpers/hasher");
var MongoFunctions = require("./helpers/mongohelper");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://aditya:lZy4mSCr4aa4ZZ6E@cluster0.tbopk.mongodb.net/sheduler?retryWrites=true&w=majority";

var app = ex();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 5000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

// HashFunctions.passwordHashCompare(bcrypt,hash,req.body.password)
app.post("/login", async (req, res) => {
  var hashed = "getfromdb";
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  var userinfo = await MongoFunctions.getUserInfo(mongodbo, req.body.email);
  console.log(userinfo);

  var result = await HashFunctions.passwordHashCompare(
    bcrypt,
    userinfo.userinfo.password,
    req.body.password
  );

  return res.send("logged");
});
app.post("/register", async (req, res) => {
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  console.log(mongodbo.collection("userdata"));
  var hash = await HashFunctions.passwordHasher(bcrypt, req.body.password);
  var ack = await MongoFunctions.register(mongodbo, uri, req.body.email, hash);
  return res.send(ack);
});
