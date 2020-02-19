const express = require('express');
const app = express()
const PORT = 3000
// const fruits = ['apple', 'banana', 'pear']

const fruits = require('./models/fruits.js')
console.log(fruits);



app.get('/', (req, res) => {
    res.send("Hi NEO")
})

app.get('/fruits', (req, res) => {
    res.render('index.ejs', {
        allFruits: fruits
    })
})

//Show Route
app.get('/fruits/:indexOfFruits', (req, res) => {
    //first argument is a string and it is the file we want to load
    //second argument is an object and it is the data we want to pass
    res.render('show.ejs', {
        // Key is the name of the variable we'll access in our ejs file
        fruit: fruits[req.params.indexOfFruits]
    })
})



app.listen(PORT, (req, res) => {
    console.log("Careful..Someone is listening...");
})
