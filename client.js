const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
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





console.log("Connecting ...");
connect();