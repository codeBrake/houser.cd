require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')

const app = express();

const { SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/delete', controller.deleteHouse)

app.listen(SERVER_PORT, () => console.log('Listening to you on port', SERVER_PORT))