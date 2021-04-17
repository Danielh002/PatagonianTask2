const multer = require('multer');
const express = require('express')


const routes = require('./src/routes')
const storage = require('./src/services/storage')

global.__basedir = __dirname;

const app = express();
const upload = multer({storage: storage});


const HOST = process.env.SERVER_HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000

routes(app, upload.single("uploadfile"))

app.listen(PORT, HOST, () => {
    console.log(`Server running on  https://${HOST}:${PORT}`)
})
