const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/captains_log', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('open', () => {
    console.log('connected to mongo');
})

// Presentation Routes
// Index
app.get('/logs', (req, res) => {
    res.send('Index Page')
})
// Show

// New
app.get('/logs/new',(req, res) => {
    res.render('new.ejs')
})
// Create

// Edit

// Update

// Delete



app.listen(PORT, () => {
    console.log('Someone is listening...');
})
