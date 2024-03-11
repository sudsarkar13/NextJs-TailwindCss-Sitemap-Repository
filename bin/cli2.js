#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Creates a new directory for tthe project inside the current directory
fs.mkdirSync(
	path.join(process.cwd(), "create-nextjs-tailwindcss-sitemap-starter"),
	{ recursive: true }
);

// Copies the files from the template directory
fs.readdirSync(path.join(__dirname, "../template")).forEach((file) => {
	fs.copyFileSync(
		path.join(__dirname, "../template", file),
		path.join(process.cwd(), "create-nextjs-tailwindcss-sitemap-starter", file)
	);
});

console.log(
	"🚀 Project created successfully. Follow the following commands to start"
);
console.log(
	"cd create-nextjs-tailwindcss-sitemap-starter && npm install && npm run dev"
);
