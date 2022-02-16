const fs = require('fs')
const path = require("path");

// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// const onlineUsers = [
//     {
//         name: "Andrii",
//         age: 22,
//         city: "Lviv"
//     },
//     {
//         name: "Julia",
//         age: 19,
//         city: "Kyiv"
//     },
// ]
//
// const inPersonUsers = [
//     {
//         name: "Kostia",
//         age: 34,
//         city: "Dnipro"
//     },
//     {
//         name: "Marta",
//         age: 27,
//         city: "Rivne"
//     },
// ]

// for (const user of inPersonUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'inPerson', `${user.name}.txt`),
//         `NAME: ${user.name}\nAGE:${user.age}\nCITY: ${user.city}`,
//         (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err
//             }
//         })
// }
//
// for (const user of onlineUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'online', `${user.name}.txt`),
//         `NAME: ${user.name}\nAGE:${user.age}\nCITY: ${user.city}`,
//         (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err
//             }
//         })
// }

const usersReplacer = (fileName, currentDirName, newDirName) => {
    fs.rename(path.join(__dirname, 'main', currentDirName, fileName), path.join(__dirname, 'main', newDirName, fileName),
        (err) => {
            if (err) {
                console.log(err);
                throw err
            }
        })
}

// usersReplacer('Kostia.txt','inPerson','online')
// usersReplacer('Marta.txt','inPerson','online')
// usersReplacer('Andrii.txt','online','inPerson')
// usersReplacer('Julia.txt','online','inPerson')

