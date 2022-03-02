# # Remove already generated starter-kit

# cd ../starter-kit-generation
# node starter-kit-generation.js &
# wait
# cd ../package-generation

# # Remove already generated package
# if [ -d "../../package" ]; then
#     rm -rf ../../package
# fi
# wait
# generate package folder
node package-generation.js $1

wait

if [ -d "../../package" ]; then
    node remove-test.js
fi

cd ../../typescript-version/full-version
yarn format

if [ -d "../../javascript-version/full-version" ]; then
    cd ../../javascript-version/full-version
    yarn format
fi

# # Zip the package
# cd ../../
# zip -r package.zip package
# # Remove package folder
# rm -rf package

# n=0
# commands=("node ../starter-kit-generation/starter-kit-generation.js" "node package-generation.js $1")
# for cmd in "${commands[@]}"; do
#   eval ${cmd} &
#   wait
#   pid=$! &
#   pidarray[$n]=${pid} & 
#   ((n+=1)) &
#   wait
# done

