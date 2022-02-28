# Compile Typescript files to React JS files in a new directory javascript-version in the new folder
tsc --project ../../typescript-version/full-version/tsconfig.jsx.json

# Copy package.json, eslintrc, gitignore, prettierrc, Readme, editorconfig files into newly created folder javascript-version
cp ../../typescript-version/full-version/package.json ../../typescript-version/full-version/next.config.js ../../typescript-version/full-version/next-env.d.ts ../../typescript-version/full-version/.gitignore ../../typescript-version/full-version/.prettierrc.js ../../typescript-version/full-version/.editorconfig ../../typescript-version/full-version/.env ../../javascript-version/full-version/

# Copy .vscode & public directories into javascript-version for assets and .vscode configurations
cp -r  ../../typescript-version/full-version/public ../../typescript-version/full-version/styles ../../javascript-version/full-version/

# Remove Typescript from the javascript-version
node create-jsconfig.js

# Remove Typescript from the javascript-version
node remove-ts.js

# Create .eslint in javascript-version
node update-eslint.js

cd ../../javascript-version/full-version

# install node_modules
yarn install

# Add javascript version specific eslint plugins
yarn add eslint-plugin-react eslint-plugin-import babel-eslint

# Run yarn lint command to fix all the linting error and give space after imports
yarn lint

# Run yarn format command to format all the files using prettier
yarn format

# Copy SourceCode
cd ../../scripts/copy-source
node copySourceTSX.js
node copySourceJSX.js

# Generate DemoConfigs
cd ../../scripts/demo-generation
node generate-demo-configs.js

# Format typescript-version
cd ../../typescript-version/full-version
yarn format