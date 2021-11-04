const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: JTT')
    setTimeout(() => conn.write("Move: up"),50);
  });

  conn.on("data", () => {
    console.log(`you ded cuz you idled`);
  });
  
return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0003' ) {
      process.exit();}
    }
  stdin.on("data", handleUserInput);

  
  return stdin;
};

setupInput()



module.exports = {connect};

console.log("Connecting ...");
connect();

