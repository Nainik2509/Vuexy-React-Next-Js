node replace.js
cd ../../docs
yarn build
mv .vuepress/dist ../docs-build
zip -r ../docs.zip ../docs-build
cd ../
rm -rf docs-build
cd scripts/docs-generation
node reset
