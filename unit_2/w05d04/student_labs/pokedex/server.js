const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

const pokemon = require('./models/pokemon.js')

// index
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})

// New
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
})

// Show
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokeman: pokemon[req.params.id]
    })
})

// Edit
app .get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        pokeman: pokemon[req.params.index],
        index: req.params.index
    })
})

//Delete
app.delete('/pokemon/:index', (req, res) => {
    pokemon.splice(req.params.index, 1)
    res.redirect('/pokemon')
})

// Update
app.put('/pokemon/:index', (req, res) => {
    pokemon[req.params.index] = req.body
    res.redirect('/pokemon')
})

// Create
app.post('/pokemon', (req, res) => {
  pokemon.push(req.body)
  res.redirect('/pokemon')
})




app.listen(PORT, () => {
    console.log("Gotta catch 'em all!'");
})
