export const huskyScript = {
	"prepare:husky":
		'npm i -D husky lint-staged && husky install && npx husky add .husky/pre-commit && npx husky add .husky/commit-msg "npx lint-staged"',
};
