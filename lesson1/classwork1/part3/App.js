const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'mainDir', 'Dir1', 'Dir11'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        fs.writeFile(path.join(__dirname, 'mainDir', 'Dir1', 'Dir11', 'textInfo1.txt'),
            `some info dir11`,
            (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            })
        fs.mkdir(path.join(__dirname, 'mainDir', 'Dir2', 'Dir22'), {recursive: true}, (err) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                fs.writeFile(path.join(__dirname, 'mainDir', 'Dir2', 'Dir22', 'textInfo2.txt'),
                    `some info dir22`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                    })
                fs.writeFile(path.join(__dirname, 'mainDir', 'Dir2', 'Dir22', 'textInfo3.txt'),
                    `some info dir23`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        } else {
                            // const fileCleanerAndDirRenamer = () => {
                            //     fs.readdir(path.join(__dirname, 'mainDir'), (err, data) => {
                            //         if (err) {
                            //             console.log(err);
                            //             throw err;
                            //         }
                            //     })
                            // }
                        }
                    })
            }
        });
    }
});

