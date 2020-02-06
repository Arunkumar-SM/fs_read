"use strict";
exports.__esModule = true;
var fs = require("fs");
var FILE_NAME = "file_name.txt";
// promise.
// Thennable is an interface.
// Thennable should have method called "then".
// "then" will accept a callback. inside a then accepted callback function,
// if you can retrun another thennable or anything.
var readFile = function (name) {
    return new Promise(function (resolve, reject) {
        fs.readFile(name, "utf8", function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};
readFile(FILE_NAME)
    .then(function (ANOTHER_FILE_NAME) {
    return readFile(ANOTHER_FILE_NAME);
})
    .then(function (file_content) {
    console.log("content will be ::: ", file_content);
}, function (err) {
    console.log("err:: ", err);
});
readFile("sanath");
// fs.readFile(FILE_NAME, "utf8", (err, ANOTHER_FILE_NAME) => {
//   if (err) {
//     throw err;
//   }
//   fs.readFile(ANOTHER_FILE_NAME, "utf8", (err, content) => {
//     if (err) {
//       throw err;
//     }
//     console.log("content will be ::: ", content);
//   });
// });
