const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const Logs = require('./models/logs.js')
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
    Logs.find({}, (err, allLogs) => {
        if(err){
            res.send('You done messed up bro')
        }
        res.render('index.ejs', {
            logs: allLogs
        })
    })
})
// Show

// New
app.get('/logs/new',(req, res) => {
    res.render('new.ejs')
})

// Create
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    console.log(req.body);
    Logs.create(req.body, (err, newLog) => {
        res.redirect('/logs')
    })
})

// Edit

// Update

// Delete



app.listen(PORT, () => {
    console.log('Someone is listening...');
})
