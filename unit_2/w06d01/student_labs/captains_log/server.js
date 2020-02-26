const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const logsController = require('./controllers/logs.js')
const app = express()

const PORT = 3000

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/logs', logsController);

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/captains_log', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('open', () => {
    console.log('connected to mongo');
})



app.listen(PORT, () => {
    console.log('Someone is listening...');
})
