######** Steps
# Copy everything from the root folder except .next, docs, node_modules, yarn-error.log, scripts to a new folder
# mkdir ../../downloadable-package/tsx-version ../../downloadable-package/jsx-version
# cp -R ../../demo-configs ../../public ../../src ../../styles ../../.editorconfig ../../.env ../../.eslintrc.json ../../.gitignore ../../.prettierrc.js ../../declaration.d.ts ../../next-env.d.ts ../../next.config.js ../../next.d.ts ../../package.json ../../tsconfig.json ../../downloadable-package/tsx-version/

# Remove Buy Now Button from UserLayout & layouts/components/BuyNowButton.tsx
# Change disableCustomizer Customizer to true
node package-generation.js $1

# # Zip the package
# cd ../../
# zip -r downloadable-package.zip downloadable-package
# rm -rf downloadable-package
