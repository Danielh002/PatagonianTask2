const csv = require('csvtojson')
const fs = require('fs');
const Car = require('../models/car')
const commons = require('../utils/commons')
const mongoHandler = require('../services/mongoHandler')

const uploadFunction = async function (req, res) {
    try{
        path = __basedir + '/uploads/' + req.file.filename
        provider =  req.body.provider
        jsonObject = await csv().fromFile(path)
        cars = commons.convertArray(jsonObject, provider)
        Car.collection.insertMany(cars, mongoHandler.onInsert)
        res.json({
            'msg': 'File uploaded successfully!', 'file': cars
        });
    }catch(err){
        res.json({
            'msg': "Error trying to open the file" + err
        });
    }finally{
        fs.unlinkSync(__basedir + '/uploads/' + req.file.filename);
    }
}

module.exports = uploadFunction;
