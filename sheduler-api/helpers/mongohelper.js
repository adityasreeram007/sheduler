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
};
