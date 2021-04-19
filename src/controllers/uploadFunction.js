const csv = require('csvtojson')
const fs = require('fs');
const Car = require('../models/car')
const commons = require('../utils/commons')
const mongoHandler = require('../services/mongoHandler')

const uploadFunction = async function (req, res) {
    let provider =  req.body.provider
    if( req.file && provider && provider.length >= 3){
        let path = __basedir + '/uploads/' + req.file.filename
        try{
            let jsonObject = await csv().fromFile(path)
            let cars = commons.convertArray(jsonObject, provider)
            let response = await Car.collection.insertMany(cars, mongoHandler.onInsert)
            res.json({
                'msg': 'File uploaded successfully!', 'result' : { 'insertedCount': response.insertedCount, 'insertedIds': response.insertedIds } 
            });
        }catch(err){
            res.json({
                'msg': "Error trying to open the file" + err
            });
        }finally{
            fs.unlinkSync(__basedir + '/uploads/' + req.file.filename);
        }
    }
    else{
        res.status(400)
        res.json({
            'msg': "No provider name or file were found"
        });
    }
}

module.exports = uploadFunction;
