const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Evan')
})

app.get('/frasier', (req, res) => {
    res.send('Once in prep school, the Existentialist Club once named me "Most likely to be"')
})

app.get('/niles', (req, res) => {
    res.send('You know, sometimes I wonder if Im not just in psychiatry for money')
})

app.get('/daphine', (req, res) => {
    res.send("Well, have fun. I'm off to stick my head in the oven.")
})

app.get('/roz', (req, res) => {
    res.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!")
})

app.get('/martin', (req, res) => {
    res.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.")
})

app.get('/Scrappy', (req, res) => {
    res.send("Woof")
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
