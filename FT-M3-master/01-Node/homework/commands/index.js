var fs = require('fs');s

module.exports = {
    pwd: fn() {},
    date: fn() {}
}

fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });