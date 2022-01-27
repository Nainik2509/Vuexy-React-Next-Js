set -e
node generate-demo-configs.js
for i in {1..6}
do
	node replace.js demo-$i
  cd ../../
  yarn build
  yarn next export
  mv out demo-$i
  zip -r demo-$i.zip demo-$i
  rm -rf demo-$i
  cd ./scripts/demo-generation
  node reset.js demo-$i
done
