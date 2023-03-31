
# kinglint

**kinglint** is a command-line tool to install and set up linters for JavaScript projects.

## Installation

To install **kinglint**, simply run:

    npm install -g kinglint

## Usage
 
To use **kinglint**, run the following command **in the root of your project**:

    npx kinglint -JS

This will install the necessary dependencies and create configuration files for ESLint and Prettier.


    npx kinglint -HK

This will install and configure Husky, pre-commit and lint-staged, and add a script to validate commit messages.

## Options

The following options are currently available:

**-JS** or **--javascript**: Installs and configures ESLint and Prettier for JavaScript projects.

**-NXJS** or **--nextjs**: Installs and configures ESLint and Prettier with Next.js specific rules.

**-HK** or **--husky**: Installs and configures Husky, commit-msg and lint-staged.

## What's installed with each option

**-JS** or **--javascript**
- ESLint: JavaScript linter
- Prettier: Code formatter

**-NXJS** or **--nextjs**
- ESLint: JavaScript linter with Next.js specific rules
- Prettier: Code formatter

**-HK** or **--husky**
- Husky: Git hooks manager
- lint-staged: Run linters on git staged files
- commit-msg: A script that validates commit message prefixes to ensure that they follow a specific format. The following prefixes are currently supported:

  - fix: for bug fixes
  - feat: for new features
  - chore: for maintenance tasks (e.g. updating dependencies)
  - docs: for documentation changes
  - style: for changes that do not affect the meaning of the code (e.g. white-space, formatting, missing semi-colons, etc.)
  - refactor: for code refactoring
  - test: for adding or modifying tests
  - wip: for work in progress commits

### Using `kinglint` Locally

You can also use `kinglint` locally by linking the package to your project with the following steps:

1. Clone the `kinglint` repository from GitHub
2. Navigate to the `kinglint` directory and install the package's dependencies
3. Create global link: **npm link**
4. Link the package to your project: **npm link kinglint**
5. Now you can use `kinglint` in your project running some option **in the root of your project**: example: **kinglint -JS**


## Contributing

If you want to contribute to kinglint, please read the contribution guidelines in the CONTRIBUTING.md file.

## Author

**kinglint** was created by Miguel Bermell.

## License
kinglint is available under the ISC license. See the LICENSE.md file for more details.

