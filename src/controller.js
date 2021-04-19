var uploadFunction = require('./controllers/uploadFunction');


var controllers = {
    upload: (req, res) => uploadFunction(req, res),
    
};

module.exports = controllers;