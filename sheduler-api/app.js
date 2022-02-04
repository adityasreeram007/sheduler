var ex = require("express");
var cors = require("cors");
var bcrypt = require("bcryptjs");
var HashFunctions = require("./helpers/hasher");
var MongoFunctions = require("./helpers/mongohelper");
var SessionFunctions = require("./helpers/sessionHelper");
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
  // var hashed = "getfromdb";
  console.log("login")
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  var userinfo = await MongoFunctions.getUserInfo(mongodbo, req.body.email);
  console.log(userinfo);
 if(userinfo===undefined){
   return res.send(false)
 }

  var ack = await HashFunctions.passwordHashCompare(
    bcrypt,
    userinfo.userinfo.password,
    req.body.password
  );
  if(!ack){
    return res.send(ack)
  }
  var token=SessionFunctions.generateToken()
  var changestatus=await MongoFunctions.changeSessionToken(mongodbo,req.body.email,token)
   
  return res.send(token);
});
app.post("/register", async (req, res) => {
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  console.log(mongodbo.collection("userdata"));
  var hash = await HashFunctions.passwordHasher(bcrypt, req.body.password);
  var ack = await MongoFunctions.register(mongodbo, uri, req.body.email, hash);
  return res.send(ack);
});

app.post("/getdata", async (req, res) => {
  
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  if(!MongoFunctions.validateToken(mongodbo,req.body.email,req.body.token)){
    return res.send(401)
  }
  var userdata = await MongoFunctions.getUserInfo(mongodbo, req.body.email);
  delete userdata.userinfo.password;
  return res.send(userdata);
});

app.post('/adddata',async (req,res)=>{
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  if(!await MongoFunctions.validateToken(mongodbo,req.body.email,req.body.token)){
    return res.send(401)
  }
  
  var ack=await MongoFunctions.insertData(mongodbo,req.body.email,req.body.data)
  return res.send(ack)
})

app.post('/updatedata',async(req,res)=>{
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  if(!await MongoFunctions.validateToken(mongodbo,req.body.email,req.body.token)){
    return res.send(401)
  }

  return res.send(true)
})

app.post('/deletedata',async(req,res)=>{
  var mongodbo = await MongoFunctions.connect(MongoClient, uri);
  if(!await MongoFunctions.validateToken(mongodbo,req.body.email,req.body.token)){
    return res.send(401)
  }
  return res.send(true)

})