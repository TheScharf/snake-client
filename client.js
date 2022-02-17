const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", (Name) => {
    console.log("connection successful!");
    conn.write("Name: AMS");
    //conn.write("Move: up");
  }); 

  return conn;
};


module.exports = {
  connect
}





