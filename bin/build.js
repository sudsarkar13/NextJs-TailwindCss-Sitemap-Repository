#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Replace with your actual template directory path
const templateDir = path.join(__dirname, "../template");

// Replace with your desired output directory path
const outputDir = process.cwd();

function copyTemplate(source, destination) {
	fs.access(source, fs.constants.F_OK, (err) => {
		if (err) {
			console.error(`Error accessing source directory: ${source}`);
			return;
		}

		const stats = fs.lstatSync(source);
		if (stats.isDirectory()) {
			fs.mkdirSync(destination, { recursive: true });
			fs.readdirSync(source).forEach((file) => {
				copyTemplate(path.join(source, file), path.join(destination, file));
			});
		} else {
			fs.copyFileSync(source, destination);
		}
	});
}

// The copyTemplate function in bin/build.js uses synchronous and asynchronous file system operations together, which is not ideal. Specifically, fs.access is asynchronous and uses a callback, whereas fs.lstatSync, fs.mkdirSync, fs.readdirSync, and fs.copyFileSync are synchronous.

// An error could occur if the directory or file operations take longer than expected after the fs.access check passes, potentially leading to race conditions.

// To correct this, you could either make the entire copyTemplate function synchronous by using the synchronous versions of fs.access (i.e., fs.accessSync), or refactor it to be fully asynchronous using Promises or async/await along with the asynchronous versions of the other fs methods.

// Here is a quick synchronous rewrite:

// Corrected Code

// function copyTemplateSync(source, destination) {
//   try {
//       fs.accessSync(source, fs.constants.F_OK);

//       const stats = fs.lstatSync(source);
//       if (stats.isDirectory()) {
//           fs.mkdirSync(destination, { recursive: true });
//           fs.readdirSync(source).forEach((file) => {
//               copyTemplateSync(path.join(source, file), path.join(destination, file));
//           });
//       } else {
//           fs.copyFileSync(source, destination);
//       }
//   } catch (err) {
//       console.error(`Error accessing source directory: ${source}`);
//   }
// }

// Please note that using synchronous operations can block the Node.js event loop, impacting performance, especially for I/O-bound applications. Depending on your use case, you might want to opt for a fully asynchronous approach instead.

try {
	copyTemplate(templateDir, outputDir);
	console.log("Webpage template successfully built!");
} catch (error) {
	console.error("Error building template:", error);
}
