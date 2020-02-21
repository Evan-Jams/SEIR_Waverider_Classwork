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

// Create
app.post('/pokemon', (req, res) => {
  pokemon.push(req.body)
  res.redirect('/pokemon')
})

// Edit
app.get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        pokeman: pokemon[req.params.index],
        index: req.params.index
    })
})

// Update
app.put('/pokemon/:index', (req, res) => {
    let object = {...req.body}
    object.img = pokemon[req.params.index].img
    object.type = [object.type]
    object.stats = {
        hp: object.hp,
        attack: object.attack,
        defense: object.defense,
    }
    delete object.hp, object.attack, object.defense
    object.misc = {
        height: object.height,
        weight: object.weight,
    }
    pokemon[req.params.index] = object
    res.redirect('/pokemon')
})

//Delete
app.delete('/pokemon/:index', (req, res) => {
    pokemon.splice(req.params.index, 1)
    res.redirect('/pokemon')
})










app.listen(PORT, () => {
    console.log("Gotta catch 'em all!'");
})
