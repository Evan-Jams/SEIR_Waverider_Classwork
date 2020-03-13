const express = require('express')
const app = express()

const PORT = 3003

app.use(express.json())


app.listen(PORT, (req, res) => {
    console.log('Listening on this port', PORT);
})
