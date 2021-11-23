var ex = require('express')
var cors = require('cors')
var bcrypt=require('bcrypt')
var HashFunctions=require('./helpers/hasher')

var app = ex();
app.use(cors())
var bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const uri = 'mongodb+srv://aditya:NeuralNet@1@cluster0.tbopk.mongodb.net/playground?retryWrites=true&w=majority'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 5000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// HashFunctions.passwordHashCompare(bcrypt,hash,req.body.password)
app.post('/login', async (req,res)=>{
    var hash=await HashFunctions.passwordHasher(bcrypt,req.body.password)
    console.log(hash)
    return res.send("logged")
    

})