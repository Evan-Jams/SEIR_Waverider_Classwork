const express = require('express')
const app = express()
const PORT = 3000
/* End Variables */

/* Presentational Routes ******************************/
// Index
app.get('/fruits', (req, res) => {
    res.send('Fruits')
})

// New
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
})

// Show
app.get('/', (req, res) => {

})

// Edit
app.get('/', (req, res) => {

})



/* Functional Routes ********************************/
// Create
app.post('/', (req, res) => {

})

// Update
app.put('/', (req, res) => {

})
// Delete
app.delete('/', (req, res) => {

})






app.listen(PORT, (req, res) => {
    console.log('Someone is listening...');
})
/* End Listen */
