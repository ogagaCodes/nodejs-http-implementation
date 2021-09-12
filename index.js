const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    console.log(req);
    res.write("REQIEST RECEIVED...");
    res.end();
  });
server.on("connection", (connection) => {
  const userAddress = connection.localAddress;
  console.log("Someone just connected..");
  console.log("UserAddress: ", userAddress);
});

server.listen("9000", () => {
  console.log("Server listening on port 9000");
});
