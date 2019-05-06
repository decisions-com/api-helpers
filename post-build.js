const fs = require("fs");
const prettier = require('prettier');
const ncp = require('ncp');

console.log("Creating package.json");

let package = require("./package.json");

let distPackage = Object.assign({}, package);
delete distPackage.scripts;

let distPackageString = JSON.stringify(distPackage);
distPackageString = prettier.format(distPackageString, { parser: "json"});

fs.writeFileSync("./dist/package.json", distPackageString);

/* Copy the README */
console.log("Copying README");

var readmeString = fs.readFileSync("README.md", "utf8");
readmeString = readmeString.replace('./src/', './');

fs.writeFileSync("./dist/README.md", readmeString);

console.log("Copying docs");

ncp('./docs', './dist/docs', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Build Complete.');
 });
