const fs = require("node:fs");
const filename = process.argv[2];
let input = fs.readFileSync(filename, "utf8");
const rows = input.split("\n");
const r = rows.map((row) => row.split(""));

let xmasLTRCount = 0;

// loop from 1 to n -1 both in x and y axis
// for each element check X , make a function to do it easires

for (let i = 1; i < r.length - 1; i++) {
  for (let j = 1; j < r[i].length - 1; j++) {
    if (checkX(i, j)) xmasLTRCount++;
  }
}

function checkX(i, j) {
  const first = r[i - 1][j - 1] + r[i][j] + r[i + 1][j + 1];
  const second = r[i - 1][j + 1] + r[i][j] + r[i + 1][j - 1];
  return ["SAM", "MAS"].includes(first) && ["SAM", "MAS"].includes(second);
}

console.log(input);
console.log("Total count:", xmasLTRCount);

//
