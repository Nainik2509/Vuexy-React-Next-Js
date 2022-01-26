set -e
node generate-demo-configs.js
for i in {1..6}
do
  cd /c/xampp/htdocs/master-react-mui-nextjs/scripts/demo-generation
	node replace.js demo-$i
  cd ../../
  yarn build
  yarn next export
  mv out demo-$i
  zip -r demo-$i.zip demo-$i
  rm -rf demo-$i
  cd /c/xampp/htdocs/master-react-mui-nextjs/scripts/demo-generation
  node reset.js
done
