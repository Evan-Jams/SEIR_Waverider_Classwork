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
        budgets: budget
    })
})

app.post('/budgtr', (req, res) => {
    const object = {...req.body}
    console.log(object)
        budget.push(req.body)
        res.redirect('/budgtr')
})

app.get('/budgtr/new', (req, res) => {
    res.render('new.ejs', {
    })
})

app.get('/budgtr/:transactionInfo', (req, res) => {
    const currentTransaction = budget[req.params.transactionInfo]
    res.render('show.ejs', {
        budget: currentTransaction
    })
})









app.listen(PORT, () => {
    console.log('Careful...Someone is listening...');
})
