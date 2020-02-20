const express = require('express')
const app = express()
const PORT = 3000

const budget = require('./models/budget.js')

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));


app.get('/budgtr', (req, res) => {
    // res.send('Hey, whats up')
    res.render('index.ejs', {
        budget: budget
    })
})









app.listen(PORT, () => {
    console.log('Careful...Someone is listening...');
})
