#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

const dirName = process.argv[2];
if (!dirName) {
  console.log("Please provide a directory name");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), dirName);

// Create project directory
fs.mkdirSync(projectPath);

// Copy files excluding bin and node_modules directories
const filesToCopy = fs
  .readdirSync(__dirname)
  .filter(
    (file) =>
      file !== "node_modules" &&
      file !== "bin" &&
      file !== "package-lock.json" &&
      file !== "package.json"
  );

filesToCopy.forEach((file) => {
  const sourcePath = path.join(__dirname, file);
  const destinationPath = path.join(projectPath, file);
  if (fs.lstatSync(sourcePath).isDirectory()) {
    fs.mkdirSync(destinationPath);
    const files = fs.readdirSync(sourcePath);
    files.forEach((childFile) => {
      const sourceChildPath = path.join(sourcePath, childFile);
      const destinationChildPath = path.join(destinationPath, childFile);
      fs.copyFileSync(sourceChildPath, destinationChildPath);
    });
  } else {
    fs.copyFileSync(sourcePath, destinationPath);
  }
});

// Install dependencies
execSync("npm install", {
  cwd: projectPath,
  stdio: "inherit",
});

console.log(
  `🎉 Project successfully created! You can now go to ${projectPath} and start coding`
);
