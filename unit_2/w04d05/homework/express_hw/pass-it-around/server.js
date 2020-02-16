const express = require('express')
const app = express()
const PORT = 3000

let bottles = 99
const html = (`<a href="/${bottles}">take one down, pass it around</a>`)

app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall` + `: ` + html)
})

app.get(`/:number_of_bottles`, (req, res) => {
    // bottles -= 1
    res.send(`${bottles} Bottles of beer on the wall` + `: ` + html)
})



app.listen(PORT, () => {
    console.log("Careful what you type, someone is listening...");
})
