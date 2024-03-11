#!/usr/bin/env node

const { execSync, readdirSync } = require('child_process');
const { mkdirSync, copyFileSync } = require('fs');
const path = require('path'); // Added for path manipulation

const projectName = process.argv[3]; // Adjusted index for project name
const templateDir = './bin/project-template'; // Path to template directory

if (!projectName) {
  console.error('Please provide a project name as the second argument.');
  process.exit(1);
}

console.log(`Creating project ${projectName}...`);

// Create the project directory
mkdirSync(projectName);

// Copy files and folders from the template, excluding "bin" and "node_modules"
readdirSync(templateDir).forEach((file) => {
  const filePath = path.join(templateDir, file); // Use path.join for reliable path construction
  const stats = fs.statSync(filePath);

  if (stats.isDirectory()) {
    if (file !== 'bin' && file !== 'node_modules') {
      mkdirSync(path.join(projectName, file));
      readdirSync(filePath).forEach((subFile) => {
        copyFileSync(path.join(filePath, subFile), path.join(projectName, file, subFile));
      });
    }
  } else {
    if (file !== 'cli.js') { // Avoid copying the CLI script itself
      copyFileSync(filePath, path.join(projectName, file));
    }
  }
});

console.log(`Project ${projectName} created successfully!`);
