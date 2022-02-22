const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'mainDir', 'Dir1', 'Dir11'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile(path.join(__dirname, 'mainDir', 'Dir1', 'Dir11', 'textInfo1.txt'),
//             `some info dir11`,
//             (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             })
//
//         fs.mkdir(path.join(__dirname, 'mainDir', 'Dir2', 'Dir22'), {recursive: true}, (err) => {
//             if (err) {
//                 console.log(err);
//                 // throw err;
//             } else {
//                 fs.writeFile(path.join(__dirname, 'mainDir', 'Dir2', 'Dir22', 'textInfo2.txt'),
//                     `some info dir22`,
//                     (err) => {
//                         if (err) {
//                             console.log(err);
//                             throw err;
//                         }
//                     })
//
//                 fs.writeFile(path.join(__dirname, 'mainDir', 'Dir2', 'Dir22', 'textInfo3.txt'),
//                     `some info dir23`,
//                     (err) => {
//                         if (err) {
//                             console.log(err);
//                             throw err;
//                         }
//                     })
//             }
//         });
//     }
// });

// const fileCleanerAndDirRenamer = (pathForCheck) => {
//     fs.readdir(path.join(pathForCheck), (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             for (const element of data) {
//                 fs.lstat(path.join(pathForCheck, element), (err, stats) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         if (stats.isDirectory()) {
//                             fs.rename(path.join(pathForCheck, element),
//                                 path.join(pathForCheck, `${element}_new`),
//                                 (err) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                         console.log('rename done');
//                                         pathForCheck = path.join(pathForCheck, `${element}_new`)
//                                         console.log(pathForCheck);
//                                         fileCleanerAndDirRenamer(pathForCheck)
//                                     }
//                                 })
//                         }
//                         if (stats.isFile()) {
//                             fs.truncate(path.join(pathForCheck, element), (err) => {
//                                 if (err) {
//                                     console.log(err);
//                                 } else {
//                                     pathForCheck = path.join(pathForCheck, element)
//                                     fileCleanerAndDirRenamer(pathForCheck)
//                                     console.log('truncate done');
//                                 }
//                             })
//                         }
//                     }
//                 })
//             }
//         }
//     })
// }
//
// const pathForCheck = path.join(__dirname, 'mainDir')
// fileCleanerAndDirRenamer(pathForCheck)
