const fs = require('fs');
const path = require("path");

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        for (const user of inPersonUsers) {
            fs.writeFile(path.join(__dirname, 'main', 'inPerson', `${user.name}.txt`),
                `NAME: ${user.name}\nAGE:${user.age}\nCITY: ${user.city}`,
                (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                })
        }
        fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                for (const user of onlineUsers) {
                    fs.writeFile(path.join(__dirname, 'main', 'online', `${user.name}.txt`),
                        `NAME: ${user.name}\nAGE:${user.age}\nCITY: ${user.city}`,
                        (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                        })
                }
            }
        });
    }
    const usersReplacer = (currentDirName, newDirName) => {
        fs.readdir(path.join(__dirname, 'main', currentDirName), (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                for (const file of data) {
                    fs.rename(path.join(__dirname, 'main', currentDirName, file), path.join(__dirname, 'main', newDirName, file),
                        (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            } else {
                                console.log(newDirName, data);
                            }
                        })
                }

            }
        })
    }
    usersReplacer('inPerson', 'online');
    usersReplacer('online', 'inPerson');
});

const onlineUsers = [
    {
        name: "Andrii",
        age: 22,
        city: "Lviv"
    },
    {
        name: "Julia",
        age: 19,
        city: "Kyiv"
    },
];

const inPersonUsers = [
    {
        name: "Kostia",
        age: 34,
        city: "Dnipro"
    },
    {
        name: "Marta",
        age: 27,
        city: "Rivne"
    },
];
