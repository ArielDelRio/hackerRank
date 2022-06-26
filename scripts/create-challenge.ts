import fs from "fs";

const args = process.argv;
const challengeName = args[3] || "NewChallenge";
const challengePath = `./challenges/${challengeName}`;

console.log("creating folder...");
if (!fs.existsSync(challengePath)) {
  fs.mkdirSync(challengePath);
  console.log(`${challengeName} folder is created successfully`);
}

fs.writeFile(
  `${challengePath}/${challengeName}.ts`,
  "// Write your Code here...",
  function (err) {
    if (err) throw err;
    console.log(`${challengeName}.ts is created successfully.`);
  }
);

fs.writeFile(
  `${challengePath}/${challengeName}.test.ts`,
  "// Write your test here...",
  function (err) {
    if (err) throw err;
    console.log(`${challengeName}.test.ts is created successfully.`);
  }
);
