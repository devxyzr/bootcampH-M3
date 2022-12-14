process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});

const commands = require("./commands");

// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  if (cmd === "date") {
    process.stdout.write(Date());
  }
  if (cmd === "pwd") process.stdout.write("\nprompt > ");
});

const commands = require("./commands/index.js");

const cmd = "pwd";

commands[cmd](); // la función dentro de la propiedad pwd
