var uploadFunction = require('./controllers/uploadFunction');


var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    upload: (req, res) => uploadFunction(req, res),
    
};

module.exports = controllers;