const express = require('express')
const app = express()
const PORT = 3000


let bottles = 99
let html = (`<a href="/${bottles - 1}">take one down, pass it around</a>`)


app.get('/', (req, res) => {
    res.send(`${bottles} Bottles of beer on the wall` + `: ` + html)
})

app.get(`/:number_of_bottles`, (req, res) => {
    let bottles = req.params.number_of_bottles
    let html = (`<a href="/${bottles - 1}">take one down, pass it around</a>`)
    if (bottles > 0) {
        res.send(`${bottles} Bottles of beer on the wall` + `: ` + html)
    } else {
        let html = `<a href="/">Go home to refill</a>`
        res.send(`${bottles} Bottles of beer on the wall` + `: ` + html)
    }

})



app.listen(PORT, () => {
    console.log("Careful what you type, someone is listening...");
})
