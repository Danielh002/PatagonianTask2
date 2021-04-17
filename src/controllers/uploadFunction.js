//var User = require('../models/user');
const csv = require('csvtojson')
const fs = require('fs');

 
const uploadFunction = function (req, res) {
    
    path = __basedir + '/uploads/' + req.file.filename
    console.log(path)
    csv().fromFile(path).then((jsonObject) => {
        console.log(jsonObject)
    })
    res.json({
        'msg': 'File uploaded/import successfully!', 'file': req.file
    });
    fs.unlinkSync(path);
}

module.exports = uploadFunction;
