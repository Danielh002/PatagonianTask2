const csv = require('csvtojson')
const fs = require('fs');


const uploadFunction = async function (req, res) {
    try{
        path = __basedir + '/uploads/' + req.file.filename
        jsonObject = await csv().fromFile(path)
        console.log(jsonObject)
        res.json({
            'msg': 'File uploaded/import successfully!', 'file': req.file
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
