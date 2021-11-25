var schema = require("./dbschema");
module.exports = {
  connect: (client, uri) => {
    return client
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((db) => {
        return db.db("sheduler");
      });
  },
  register: (mongo, uri, email, hashedpassword) => {
    var userschema = schema.schema;
    userschema.userinfo = {
      email: email,
      password: hashedpassword,
    };
    return mongo
      .collection("userdata")
      .insertOne(userschema)
      .then((data) => {
        // console.log(data)
        return data.acknowledged;
      });
  },
  getUserInfo: async (mongo, email) => {
    var result = await mongo
      .collection("userdata")
      .find({ "userinfo.email": email })
      .toArray();
    return result[0];
  },
  insertData:async (mongo,email,shedulecontent)=>{

    // var result = await mongo
    // .collection("userdata")
    // .find({ "userinfo.email": email })
    // .toArray();
    // result=result[0]
    
    // result.sheduledata.push(shedulecontent)
   return  mongo.collection('userdata').updateOne({'userinfo.email':email}, {
     $push:{
       "sheduledata":shedulecontent
     }
   }).then((ack,err)=>{
      if (err) throw err
      console.log(ack)
      return ack
    })
    



  },
  validateToken:async(mongo,email,token)=>{
    var result = await mongo
      .collection("userdata")
      .find({ "userinfo.email": email })
      .toArray();
    return result[0].token===token;

  },
  changeSessionToken:async(mongo,email,token)=>{
    return await mongo.collection("userdata").updateOne({'userinfo.email':email},{
      $set:{
        token:token
      }
    }).then((ack,err)=>{
      if(err) throw err
      return ack
    })
  }
};
