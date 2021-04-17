'use strict';

 
const multer = require('multer');
const controller = require('./controller');

module.exports = function (app) {
    app.route('/').get((req,res) => res.send("Hola adios"));
    app.post('/upload', upload.single('uploadfile'), controller.upload)
}