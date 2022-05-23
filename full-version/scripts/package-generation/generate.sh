node generate-package.js

cd ../../../package

yarn

yarn format

rm -rf node_modules

cd ../

# zip -r package.zip package

# wait

# rm -rf package

wait

cd full-version/scripts/starter-kit-generation

sh generate.sh

wait

cd ../../../starter-kit

rm -rf node_modules

wait

cd ../

# wait

# zip -r starter-kit.zip vuexy-react-starter-kit

cp -r starter-kit package/
