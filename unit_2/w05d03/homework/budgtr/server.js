const express = require('express')
const app = express()
const PORT = 3000

const budget = require('./models/budget.js')


app.listen(PORT, () => {
    console.log('Careful...Someone is listening...');
})
