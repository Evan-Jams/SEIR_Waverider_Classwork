const express = require('express')
const app = express()
const PORT = 3000
const superheroes = [
    {
        name: 'Superman',
        powers: ['flight', 'invulnerability', 'x-ray vision']
    },
    {
        name: 'Wonder Woman',
        powers: [],
    },
    {
        name: 'Black Panther',
        powers: [],
    }
]

app.get('/', (req, res) => {
    res.send('Hello evan')
})

app.get('/superheroes', (req, res) => {
    res.send(superheroes)
})

app.get('/superheroes/:indexOfSupers', (req, res) => {
    res.send(`<h1>${superheroes[req.params.indexOfSupers].name}</h1>` +
        `<ul>`
            +
            forEach(power in `${superheroes[req.params.indexOfSupers].powers}`){
                `<li>${superheroes[req.params.indexOfSupers].powers}</li>`
            }

            +
        `</ul>`
    )
})



app.listen(PORT, () => {
    console.log("Someone is listening...");
})
