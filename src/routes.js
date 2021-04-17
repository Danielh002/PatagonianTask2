'use strict';
const controller = require('./controller');


module.exports = function (app, upload) {
    app.route('/').get((req, res) => res.send("Hola adios"));
    app.post('/api/uploadfile', upload, controller.upload)
}