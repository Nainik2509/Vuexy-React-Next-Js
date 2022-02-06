const fs = require('fs')
const path = require('path')

const handleReplacement = (config) => {
    const { file, from, to } = config
    if (file && fs.existsSync(file)) {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {

                console.log(err);

                return
            } else {
                fs.writeFile(file, data.replace(new RegExp(from, 'g'), to), err => {
                    if (err) {

                        console.log(err);

                        return
                    }else{
                        console.log(file);
                    }
                })
            }
        })
    }
}

const replaceInFile = (config) => {
    const { files, from, to } = config
    const exists = fs.existsSync(files)
    const stats = exists && fs.statSync(files)
    const isDirectory = exists && stats.isDirectory()
    if (isDirectory) {

        const filesInDirectory = fs.readdirSync(files);
        for (const file of filesInDirectory) {
            const absolute = path.join(files, file);
            if (fs.statSync(absolute).isDirectory()) {
                replaceInFile({ files: absolute, from, to });
            } else {

                handleReplacement({ file: absolute, from, to })
            }
        }

    } else {
        handleReplacement({ file: files, from, to })
    }
}

module.exports = {
    replaceInFile
}