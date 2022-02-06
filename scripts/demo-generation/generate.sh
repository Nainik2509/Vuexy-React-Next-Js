set -e
node generate-demo-configs.js
for i in {1..2}
do
	node replace.js demo-$i
  cd ../../tsx-version/full-version/
  yarn build
  yarn next export
  mv out ../../demo-$i
  # zip -r demo-$i.zip demo-$i
  # rm -rf demo-$i
  cd ../../scripts/demo-generation
  node reset.js demo-$i
done
