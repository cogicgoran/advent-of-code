const fs = require("node:fs");

const filename = process.argv[2];
let input = fs.readFileSync(filename, "utf8");

const reports = input.split("\n").filter((val) => val.length > 0);

const safeCount = reports.reduce((safeCount, report) => {
  const levels = report.trim().split(" ");
  let isSafe = isLevelSafe(levels);
  if (isSafe) return safeCount + 1;
  return safeCount;
}, 0);

console.log(safeCount);

function signDiff(a, b) {
  // IDEA: return -1, 0, or 1
  return Math.min(Math.max(b - a, -1), 1);
}

function isDiffSafe(a, b) {
  const diff = Math.abs(b - a);
  return diff >= 1 && diff <= 3;
}

function isLevelSafe(levels) {
  let prevSign;
  for (let i = 0; i < levels.length - 1; i++) {
    if (!isDiffSafe(levels[i], levels[i + 1])) return false;
    if (signDiff(levels[i], levels[i + 1]) === 0) return false;
    const signDiffCurrent = signDiff(levels[i], levels[i + 1]);
    if (i !== 0 && signDiffCurrent !== prevSign) return false;
    prevSign = signDiffCurrent;
  }
  return true;
}
