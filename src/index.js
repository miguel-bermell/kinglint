#!/usr/bin/env node
import { exec } from "child_process";
import { program } from "commander";
import { readFileSync, writeFile } from "fs";
import ora from "ora";
import path, { join } from "path";

import { commitMsg } from "./files/commitMsg.js";
import { editorConfig } from "./files/editorConfig.js";
import { eslintJs } from "./files/javascript.js";
import { lintstaged } from "./files/lintstaged.js";
import { husky } from "./packages/husky.js";
import { javascript } from "./packages/javascript.js";
import { huskyScript } from "./scripts/husky.js";
import { loadOptions } from "./utils/programOptions.js";
import { deletePkgJsonScript, writeFiles, writePkgJson } from "./utils/writeFiles.js";

const kinglintDir = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const kinglintPkgJson = readFileSync(join(kinglintDir, "package.json"), "utf8");
const { version } = JSON.parse(kinglintPkgJson);

program.version(version, "-v, --version", "current version");
loadOptions(program);

program.parse(process.argv);

const options = program.opts();

const buildConfig = {};

const setOptions = (pckg, files, options = {}) => {
	const setupFiles = Array.isArray(files) ? files : [files];
	buildConfig.package = pckg;
	buildConfig.files = setupFiles;
	buildConfig.options = options;
};

const buildOptions = Object.freeze({
	javascript: () => setOptions(javascript, { file: eslintJs, fileName: ".eslintrc.cjs" }),
	husky: () =>
		setOptions(
			husky,
			[
				{ file: lintstaged, fileName: ".lintstagedrc" },
				{ file: commitMsg, fileName: ".husky/commit-msg" },
			],
			{ file: "package.json", script: huskyScript, delete: true }
		),
});

buildOptions[Object.keys(options)[0]] && buildOptions[Object.keys(options)[0]]();

if (!Object.keys(buildConfig).length) {
	console.error("Option entered does not exist, insert --help to see options");
}

if (Object.keys(buildConfig).length) {
	const spinner = ora("Installing dependencies").start();
	const childProcess = exec(buildConfig.package.join(" "));

	childProcess.on("exit", (code) => {
		writeFiles(buildConfig.files);
		if (buildConfig?.options?.delete) {
			deletePkgJsonScript(buildConfig.options);
		}
		code === 0
			? spinner.succeed("Dependencies installed successfully")
			: spinner.fail("Error installing dependencies");
	});

	if (Object.keys(buildConfig.options).length) {
		writePkgJson(buildConfig.options);
	}

	writeFile(".editorconfig", editorConfig, (err) => {
		if (err) {
			console.error(`Error: ${err}`);
		}
	});
}
