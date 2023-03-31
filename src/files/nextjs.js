export const eslintNextjs = `module.exports = {
	env: {
		es6: true,
	},
	extends: ["next", "next/core-web-vitals", "eslint:recommended", "plugin:prettier/recommended"],
	plugins: ["simple-import-sort", "import", "unused-imports", "prettier"],
	settings: {
		"import/resolver": {
			alias: {
				map: [["@", "./src"]],
				extensions: [".js", ".jsx"],
			},
			node: {
				extensions: [".js", ".jsx"],
			},
		},
	},
	rules: {
		//error prevention
		"array-callback-return": ["error", { checkForEach: true }],
		"no-await-in-loop": "error",
		"no-constant-binary-expression": "error",
		"no-constructor-return": "error",
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-template-curly-in-string": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable-loop": "error",
		"no-unused-private-class-members": "error",

		"no-use-before-define": [
			"error",
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: false,
			},
		],
		"require-atomic-updates": "error",

		// good practises
		camelcase: ["error", { properties: "never" }],
		eqeqeq: "error",
		"new-cap": ["error", { capIsNew: false }],
		"no-array-constructor": "error",
		"no-console": ["error", { allow: ["error"] }],
		"no-else-return": ["error", { allowElseIf: false }],
		"no-extend-native": "error",
		"no-lonely-if": "error",
		"no-param-reassign": "error",
		"no-return-assign": "error",
		"no-throw-literal": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-const": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		radix: "error",
		yoda: "error",

		// style
		curly: "error",
		"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
		],

		// plugins
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"import/no-unresolved": "error",
		"import/no-webpack-loader-syntax": "error",
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
		"unused-imports/no-unused-imports": "error",
		"no-unused-vars": "off",
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
	},
};
`;
