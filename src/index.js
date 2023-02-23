#!/usr/bin/env node
import { exec } from "child_process";
import { program } from "commander";
import { readFileSync, writeFile } from "fs";
import ora from "ora";

import { editorConfig } from "./files/editorConfig.js";
import { eslintJs } from "./files/javascript.js";
import { javascript } from "./packages/javascript.js";

const { version } = JSON.parse(readFileSync("./package.json", "utf8"));
program.version(version, "-v, --version", "current version");
program.option("-JS, --javascript", "ESLint & Prettier Config");

program.parse(process.argv);

const spinner = ora("Installing dependencies").start();

const options = program.opts();

const buildConfig = {};

const setOptions = (pckg, file) => {
	buildConfig.package = pckg;
	buildConfig.file = file;
};

const buildOptions = Object.freeze({
	javascript: () => setOptions(javascript, eslintJs),
});

buildOptions[Object.keys(options)[0]] && buildOptions[Object.keys(options)[0]]();

if (!Object.keys(buildConfig).length) {
	console.error("Option entered does not exist, insert --help to see options");
}

if (Object.keys(buildConfig).length) {
	const childProcess = exec(buildConfig.package.join(" "));

	childProcess.on("error", (error) => {
		console.error(`Error: ${error}`);
	});

	childProcess.on("exit", (code) => {
		code === 0
			? spinner.succeed("Dependencies installed successfully")
			: spinner.fail("Error installing dependencies");
	});

	writeFile(".eslintrc.cjs", buildConfig.file, (err) => {
		if (err) {
			console.error(`Error: ${err}`);
		}
	});

	writeFile(".editorconfig", editorConfig, (err) => {
		if (err) {
			console.error(`Error: ${err}`);
		}
	});
}
