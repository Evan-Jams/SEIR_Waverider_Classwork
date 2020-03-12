const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const holidaysController = require('./controllers/holidays.js')


// Middleware ****************************************************************************//
app.use(express.json())
// ***************************************************************************************//


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



app.use('/holidays', holidaysController)


app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊');
})
