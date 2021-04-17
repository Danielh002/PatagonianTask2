const fs = require('fs');
const multer = require('multer');
const express = require('express')
const csv=require('csvtojson')




const routes = require('./src/routes')

const app = express();



const HOST = process.env.SERVER_HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000

global.__basedir = __dirname;
 
// -> Multer Upload Storage
const storage = multer.diskStorage({
 destination: (req, file, cb) => {
    cb(null, __basedir + '/uploads/')
 },
 filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
 }
});
 
const upload = multer({storage: storage});
 
// -> Express Upload RestAPIs
app.post('/api/uploadfile', upload.single("uploadfile"), (req, res) =>{
    importCsvData2MongoDB(__basedir + '/uploads/' + req.file.filename);
    res.json({
        'msg': 'File uploaded/import successfully!', 'file': req.file
    });
});
 
// -> Import CSV File to MongoDB database
function importCsvData2MongoDB(filePath){
    csv()
        .fromFile(filePath)
        .then((jsonObj)=>{
            console.log(jsonObj);

            
            /*
            MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
                if (err) throw err;
                let dbo = db.db("gkzdb");
                dbo.collection("customers").insertMany(jsonObj, (err, res) => {
                   if (err) throw err;
                   console.log("Number of documents inserted: " + res.insertedCount);
                   db.close();
                });
            });
			*/
            fs.unlinkSync(filePath);
        })
}


/*


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PATCH');
    next();
})
*/

//routes(app)

app.listen(PORT, HOST, () => {
    console.log(`Server running on  https://${HOST}:${PORT}`)
})
