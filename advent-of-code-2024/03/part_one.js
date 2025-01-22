const fs = require("node:fs");
const filename = process.argv[2];
// let  = fs.read(filename, 'utf8');
const stream = fs.createReadStream(filename, { encoding: "utf8" });

let shouldInclude = true;
stream.on("readable", () => {
  let buffer = [];
  let final = 0;
  while ((data = stream.read(1)) !== null) {
    buffer.push(data);
    const str = buffer.join("");
    const mulMatch = str.match(/mul\(\d\d?\d?,\d\d?\d?\)/);
    const doMatch = str.match(/do\(\)/);
    const dontMatch = str.match(/don't\(\)/);
    if (dontMatch) {
      shouldInclude = false;
    }
    if (doMatch) {
      shouldInclude = true;
    }
    if (mulMatch || doMatch || dontMatch) {
      buffer = [];
    }
    if (mulMatch && shouldInclude) {
      const a = str.match(/mul\((\d+),(\d+)\)/);
      const left = a[1];
      const right = a[2];
      final += Number(left) * Number(right);
    }
  }
  console.log(final);
});
