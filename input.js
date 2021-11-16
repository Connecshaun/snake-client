
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (input === 'w') {
    connection.write("Move: up");
  }
  if (input === 'a') {
    connection.write("Move: left");
  }
  if (input === 's') {
    connection.write("Move: down");
  }
  if (input === 'd') {
    connection.write("Move: right")
  }
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };