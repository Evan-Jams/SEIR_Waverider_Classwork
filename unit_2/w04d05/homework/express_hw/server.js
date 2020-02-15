const express = require('express')
const app = express()
const PORT = 3000

// Greetings *********************************//
//********************************************//
app.get('/greeting/:name', (req, res) => {
    res.send("Hello, " + req.params.name + "! It's so great to see you!")
})

// Tip Calculator *********************************//
//********************************************//
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let num1 = parseInt(req.params.total)
    let num2 = (parseInt(req.params.tipPercentage) / 100)
    let sum = (num1 * num2)

    res.send("Based on your $" + req.params.total + " bill, a " + req.params.tipPercentage + "% tip will be $" + sum)
})




app.listen(PORT, () => {
    console.log('Someone is listening...');
})
