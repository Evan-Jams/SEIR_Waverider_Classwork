const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')

require('dotenv').config()
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI


// Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

const logsController = require('./controllers/logs_controller.js')
app.use('/logs', logsController)
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)

// Mongoose Connection
mongoose.connect(
  mongodbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log('the connection with mongod is established at', mongodbURI)
  }
)

app.get('/', (req, res) => {
  res.redirect('/logs')
})

app.listen(PORT, () => {
    console.log('Someone is listening...');
})
