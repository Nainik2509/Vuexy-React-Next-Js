######** Steps
# Copy everything from the root folder except .next, docs, node_modules, yarn-error.log, scripts to a new folder
mkdir ../../downloadable-package
cp -R ../../demo-configs ../../public ../../src ../../styles ../../.editorconfig ../../.env ../../.eslintrc.json ../../.gitignore ../../.prettierrc.js ../../declaration.d.ts ../../next-env.d.ts ../../next.config.js ../../next.d.ts ../../package.json ../../tsconfig.json ../../downloadable-package/

# Remove Buy Now Button from UserLayout & layouts/components/BuyNowButton.tsx
# Change disableCustomizer Customizer to true
node package-generation.js

# Zip the package
cd ../../
zip -r downloadable-package.zip downloadable-package
rm -rf downloadable-package
