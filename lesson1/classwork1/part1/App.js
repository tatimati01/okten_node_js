const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'someFile.txt'),'very important information',(err)=> {
    if (err) {
        console.log(err);
        throw err;
    } else {
        fs.readFile(path.join(__dirname,'someFile.txt'),(err,data)=> {
            if (err) {
                console.log(err);
                throw err;
            } else  {
                fs.writeFile(path.join(__dirname,'otherFile.txt'),data,(err)=> {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else  {
                        console.log(data.toString());
                    }
                })
            }
        })
    }
})


