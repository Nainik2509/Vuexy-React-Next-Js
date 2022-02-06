# Compile Typescript files to React JS files in a new directory jsx-version in the new folder
# tsc ../src/* --outDir "../jsx-version/src" --jsx "preserve" --module "es6" --target "es6" --allowJs
# tsc ../src/* --baseUrl "../" --outDir "../jsx-version/src" --moduleResolution "node" --noEmitHelpers --importHelpers --jsx "preserve" --module "ESNext" --target "ESNEXT" --lib "ES2020" --allowJs --pretty --skipDefaultLibCheck --skipLibCheck --allowSyntheticDefaultImports

tsc --project ../../tsx-version/full-version/tsconfig.jsx.json

# Copy package.json, eslintrc, gitignore, prettierrc, Readme, editorconfig files into newly created folder jsx-version
cp ../../tsx-version/full-version/package.json ../../tsx-version/full-version/next.config.js ../../tsx-version/full-version/next-env.d.ts ../../tsx-version/full-version/.gitignore ../../tsx-version/full-version/.prettierrc.js ../../tsx-version/full-version/.editorconfig ../../tsx-version/full-version/.env ../../jsx-version/full-version/
# cp ../package.json  ../.gitignore ../.prettierrc.js ../README.md ../.editorconfig ../jsx-version/

# copy index.css to jsx-version/src
# cp ../src/index.css ../jsx-version/src

# Copy .vscode & public directories into jsx-version for assets and .vscode configurations
cp -r  ../../tsx-version/full-version/public ../../tsx-version/full-version/styles ../../jsx-version/full-version/


# Go into the root directory
# cd ../

# CD into jsx-version directory
# cd jsx-version

# Format 4 spaces to 2 spacer
# perl -pi -e 's{^((?: {4})*)}{" " x (2*length($1)/4)}e' ./src/**/*.{js,jsx}

# cd ../scripts/tsx-to-jsx/

# Remove Typescript from the jsx-version
node create-jsconfig.js

# Remove Typescript from the jsx-version
node remove-ts.js

# Create .eslint in jsx-version
node update-eslint.js



cd ../../jsx-version/full-version

# install node_modules
yarn install --ignore-engines

# Run yarn format command to format all the files using prettier
yarn format

# Run yarn lint command to fix all the linting error and give space after imports
yarn lint


# Automate source code snippets in jsx version
cd ../../scripts/copy-source

node copySourceTSX.js
node copySourceJSX.js

# node copySourceCode.js

# node remove-tsx.js

# yarn dev
