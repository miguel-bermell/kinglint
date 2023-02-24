const fileOptions = {
	javascript: {
		flag: "-JS, --javascript",
		description: "ESLint & Prettier Config",
	},
	husky: {
		flag: "-HK, --husky",
		description: "Husky & lint-staged Config",
	},
};

export const loadOptions = (program) => {
	Object.entries(fileOptions).forEach(([key]) => {
		const { flag, description } = fileOptions[key];
		program.option(flag, description);
	});
};
