const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const bookmarksController = require('./controllers/bookmarks.js')
const cors = require('cors')

app.use(express.json())
const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


// Mongoose Connection *******************************************************************//
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect('mongodb://localhost:27017/holidays', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...');
})
// ***************************************************************************************//


app.use('/bookmarks', bookmarksController)



app.listen(PORT, () => {
    console.log('Careful, someone is listening...');
})
