const MongoClient = require("mongodb").MongoClient; // 连接mongodb数据库

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) throw err;

  const db = client.db("test"); // 连接test数据库
  db.collection("test")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
}); // 连接mongodb数据库
