const express = require('express')
const app = express()
const PORT = 3000


const drinks = require('./models/drinks.js')
// console.log(drinks);


app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App! <a href="/drinks">Take a look at our drink selection</a>`)
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs', {
        allDrinks: drinks
    })
})











app.listen(PORT, (req, res) => {
    console.log('Careful what you type.. Someone is listening...');
})
