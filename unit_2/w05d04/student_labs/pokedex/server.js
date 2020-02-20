const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

const pokemon = require('./models/pokemon.js')

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokeman: pokemon[req.params.id]
    })
})






app.listen(PORT, () => {
    console.log("Gotta catch 'em all!'");
})
