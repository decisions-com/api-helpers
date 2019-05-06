const fs = require("fs");
const prettier = require('prettier');

let package = require("./package.json");


let distPackage = Object.assign({}, package);
delete distPackage.scripts;

let distPackageString = JSON.stringify(distPackage);
distPackageString = prettier.format(distPackageString, { parser: "json"});

fs.writeFileSync("./dist/package.json", distPackageString);

/* Copy the README */

var readmeString = fs.readFileSync("README.md", "utf8");
readmeString = readmeString.replace('./src/', './');

fs.writeFileSync("./dist/README.md", readmeString);
