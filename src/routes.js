'use strict';
const controller = require('./controller');


module.exports = function (app, upload) {
    app.post('/api/uploadfile', upload, controller.upload)
}