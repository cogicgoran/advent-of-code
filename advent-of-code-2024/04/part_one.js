const fs = require("node:fs");
const filename = process.argv[2];
let input = fs.readFileSync(filename, "utf8");
const rows = input.split("\n");
const r = rows.map((row) => row.split(""));

let xmasLTRCount = 0;

// ltr
for (let i = 0; i < r.length; i++) {
  for (let j = 0; j < r[i].length - 3; j++) {
    if (r[i][j] + r[i][j + 1] + r[i][j + 2] + r[i][j + 3] === "XMAS") {
      xmasLTRCount++;
    }
  }
}

// rtl
for (let i = 0; i < r.length; i++) {
  for (let j = 0; j < r[i].length; j++) {
    if (r[i][j - 3] + r[i][j - 2] + r[i][j - 1] + r[i][j] === "SAMX") {
      xmasLTRCount++;
    }
  }
}

// ttb
for (let i = 0; i < r.length - 3; i++) {
  for (let j = 0; j < r[i].length; j++) {
    if (r[i][j] + r[i + 1][j] + r[i + 2][j] + r[i + 3][j] === "XMAS") {
      xmasLTRCount++;
    }
  }
}

// btt
for (let i = 3; i < r.length; i++) {
  for (let j = 0; j < r[i].length; j++) {
    if (r[i][j] + r[i - 1][j] + r[i - 2][j] + r[i - 3][j] === "XMAS") {
      xmasLTRCount++;
    }
  }
}

// ttb ltr

for (let i = 0; i < r.length - 3; i++) {
  for (let j = 0; j < r[i].length - 3; j++) {
    if (
      r[i][j] + r[i + 1][j + 1] + r[i + 2][j + 2] + r[i + 3][j + 3] ===
      "XMAS"
    ) {
      xmasLTRCount++;
    }
  }
}

// ttb rtl

for (let i = 0; i < r.length - 3; i++) {
  for (let j = 3; j < r[i].length; j++) {
    if (
      r[i][j] + r[i + 1][j - 1] + r[i + 2][j - 2] + r[i + 3][j - 3] ===
      "XMAS"
    ) {
      xmasLTRCount++;
    }
  }
}

// btt ltr

for (let i = 3; i < r.length; i++) {
  for (let j = 0; j < r[i].length - 3; j++) {
    if (
      r[i][j] + r[i - 1][j + 1] + r[i - 2][j + 2] + r[i - 3][j + 3] ===
      "XMAS"
    ) {
      xmasLTRCount++;
    }
  }
}

// btt rtl

for (let i = 3; i < r.length; i++) {
    for (let j = 3; j < r[i].length; j++) {
      if (
        r[i][j] + r[i - 1][j - 1] + r[i - 2][j - 2] + r[i - 3][j - 3] ===
        "XMAS"
      ) {
        xmasLTRCount++;
      }
    }
  }

console.log(input);
console.log("Total count:", xmasLTRCount);

//
