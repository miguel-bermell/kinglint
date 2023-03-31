const fileOptions = {
	javascript: {
		flag: "-JS, --javascript",
		description: "ESLint & Prettier Config",
	},
	nextjs: {
		flag: "-NXJS, --nextjs",
		description: "ESLint & Prettier Config nextjs",
	},
	husky: {
		flag: "-HK, --husky",
		description: "Husky, commit-msg & lint-staged Config",
	},
};

export const loadOptions = (program) => {
	Object.entries(fileOptions).forEach(([key]) => {
		const { flag, description } = fileOptions[key];
		program.option(flag, description);
	});
};
