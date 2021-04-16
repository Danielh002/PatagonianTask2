const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

const app = express();

const HOST = process.env.SERVER_HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PATCH');
    next();
})

routes(app)

app.listen(PORT, HOST, () => {
    console.log(`Server running on  https://${HOST}:${PORT}`)
})