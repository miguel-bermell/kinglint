export const huskyScript = {
	"prepare:husky": `husky install && npx husky add .husky/pre-commit "npx lint-staged" && npx husky add .husky/commit-msg ""`,
};
