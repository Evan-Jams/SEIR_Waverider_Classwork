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

// Magic 8 ball *********************************//
//********************************************//
const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const randomInt = () => {
    return Math.floor(Math.random() * (magicResponses.length));
}

app.get('/magic/:question', (req, res) => {
    let newHtml = `<h1>${magicResponses[randomInt()]}</h1>`
    res.send(req.params.question + "?: " + newHtml)
})



app.listen(PORT, () => {
    console.log('Someone is listening...');
})
