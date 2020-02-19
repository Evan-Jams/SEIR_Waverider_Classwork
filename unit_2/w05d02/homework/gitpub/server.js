const express = require('express')
const app = express()
const PORT = 3000


const drinks = require('./models/drinks.js')
const food = require('./models/food.js')
// console.log(drinks);


app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App! <a href="/drinks">Take a look at our drink selection</a>`)
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs', {
        allDrinks: drinks,
        allFood: food
    })
})

app.get('/drinks/:id', (req, res) => {
    res.render('show.ejs', {
        drink: drinks[req.params.id]
    })
})


app.get('/food/:id', (req, res) => {
    res.render('show-food.ejs', {
        aFood: food[req.params.id]
    })
})




app.listen(PORT, (req, res) => {
    console.log('Careful what you type.. Someone is listening...');
})
