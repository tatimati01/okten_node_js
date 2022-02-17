const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'fileName.txt'), 'info info info info', (err) => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        fs.readFile(path.join(__dirname, 'fileName.txt'), (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                fs.mkdir(path.join(__dirname, 'dir1'), (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        fs.writeFile(path.join(__dirname, 'dir1', 'fileName2'), data, (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            } else {
                                fs.unlink(path.join(__dirname, 'fileName.txt'), (err) => {
                                    if (err) {
                                        console.log(err);
                                        throw err;
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})