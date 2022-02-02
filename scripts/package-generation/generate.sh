# Remove Buy Now Button from UserLayout & layouts/components/BuyNowButton.tsx
# Change disableCustomizer Customizer to true
node package-generation.js $1

# Zip the package
cd ../../
zip -r downloadable-package.zip downloadable-package
rm -rf downloadable-package
