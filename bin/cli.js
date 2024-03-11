#!/usr/bin/env node

// const { execSync } = require("child_process");

// const runCommand = (command) => {
// 	try {
// 		execSync(`${command}`, { stdio: "inherit" });
// 	} catch (e) {
// 		console.error(`Failed to execute ${command}`, e);
// 		return false;
// 	}
//   return true;
// }

// const repoName = process.argv[2];
// const gitCheckoutCommand = `git clone --depth 1 https://github.com/sudsarkar13/create-nextjs-tailwindcss-sitemap-starter ${repoName}`;
// const installDepsCommand = `cd ${repoName} && npm install`;

// console.log(`🚀 Creating new Next.js + Tailwind CSS + Sitemap starter project... ${repoName}`);
// const checkedOut = runCommand(gitCheckoutCommand);
// if (!checkedOut) {
//   console.error(`❌ Failed to create ${repoName}`);
//   process.exit(1);
// }

// console.log(`🚀 Installing dependencies... ${repoName}`);
// const installedDeps = runCommand(installDepsCommand);
// if (!installedDeps) {
//   console.error(`❌ Failed to install dependencies for ${repoName}`);
//   process.exit(1);
// }

// console.log(`🎉 Congratulations! You are ready. Follow the following commands to start`);
// console.log(`cd ${repoName} && npm run dev`);
// console.log(`npm run gen-sitemap when you have finished developing your website.  // this will generate sitemap.xml`);
// const installed = runCommand(installDepsCommand);
// if (!installed) {
//   process.exit(1);
// }
// const dev = runCommand(runDevCommand);
// if (!dev) {
//   process.exit(1);
// }
// const build = runCommand(runBuildCommand);
// if (!build) {
//   process.exit(1);
// }
// console.log(`🎉 Project successfully created! ${repoName}`);

const fs = require('fs');
const path = require('path');
const repoName = process.argv[2];
const currentDirectory = process.cwd();
const projectDirectory = path.join(currentDirectory, repoName);

if (!fs.existsSync(projectDirectory)) {
  fs.mkdirSync(projectDirectory);
}

const createNextAppCommand = `npx create-next-app ${repoName}`;
const setupTailwindCommand = `cd ${repoName} && npx tailwindcss init -p`;
const installSitemapPackage = `cd ${repoName} && npm install nextjs-sitemap-generator`;

console.log(`🚀 Creating new Next.js project... ${repoName}`);
const createdNextApp = runCommand(createNextAppCommand);
if (!createdNextApp) {
  console.error(`❌ Failed to create Next.js project ${repoName}`);
  process.exit(1);
}

console.log(`🚀 Setting up Tailwind CSS... ${repoName}`);
const setupTailwind = runCommand(setupTailwindCommand);
if (!setupTailwind) {
  console.error(`❌ Failed to set up Tailwind CSS for ${repoName}`);
  process.exit(1);
}

console.log(`🚀 Installing Next.js Sitemap Generator... ${repoName}`);
const installedSitemap = runCommand(installSitemapPackage);
if (!installedSitemap) {
  console.error(`❌ Failed to install Next.js Sitemap Generator for ${repoName}`);
  process.exit(1);
}

console.log(`🎉 Congratulations! You are ready. Follow the following commands to start`);
console.log(`cd ${repoName} && npm run dev`);
console.log(`npm run gen-sitemap when you have finished developing your website.  // this will generate sitemap.xml`);