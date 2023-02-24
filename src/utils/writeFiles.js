import { readFile, writeFile } from "fs";

export const writeFiles = (files = []) => {
	files.forEach(({ file, fileName }) => {
		writeFile(fileName, file, (err) => {
			if (err) {
				console.error(`Error: ${err}`);
			}
		});
	});
};

export const writePkgJson = (options) => {
	const { file, script } = options;
	const [scriptName, scriptValue] = Object.entries(script)[0];

	readFile(file, "utf-8", (err, data) => {
		if (err) {
			console.error(`Error: ${err}`);

			return;
		}

		const packageJson = JSON.parse(data);

		packageJson.scripts = {
			...packageJson.scripts,
			[scriptName]: scriptValue,
		};

		writeFile(file, JSON.stringify(packageJson, null, 2), (err) => {
			if (err) {
				console.error(`Error: ${err}`);
			}
		});
	});
};
