const express = require('express');
const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log('Watch it, someone is listening...');
})





app.get('/calc/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let sum = (num1 + num2)
    res.send("the sum is: " + sum)
})

app.get('/someroute', (req, res) => {
  console.log('req.query: ', req.query);
  res.send('someroute accessed');
});

app.get('/calcquery/:num1/:num2', (req, res) => {
    // console.log(req.query.operation);
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    if (req.query.operation === 'add') {
        let sum = (num1 + num2)
        res.send("the sum is: " + sum)
    } else if (req.query.operation === 'subtract') {
        let sum = (num1 - num2)
        res.send("the sum is: " + sum)
    } else if (req.query.operation === 'multiply') {
        let sum = (num1 * num2)
        res.send("the sum is: " + sum)
    } else if (req.query.operation === 'division') {
        let sum = (num1 / num2)
        res.send("the sum is: " + sum)
    } else if (req.query.operation === 'exponent') {
        let sum = Math.pow(num1, num2)
        res.send("the sum is: " + sum)
    } else {
        res.send('no operation')
    }
})
