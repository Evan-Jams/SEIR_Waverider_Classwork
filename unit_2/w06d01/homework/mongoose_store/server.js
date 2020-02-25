const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Product = require('./models/products.js')
const app = express()
const PORT = 3000


// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
        console.log('connected to mongo, yo!');
})

// Presentaional Routes
// Index
app.get('/mongoose_store', (req, res) => {
    Product.find({}, (error, allProducts) => {
        if (error) {
            res.send('You done messed up bro')
        }
        console.log(allProducts);
        // res.send(allProducts)
    })

})


// New

// Show

// Create

// Edit

// Update

// Destroy!



app.listen(PORT, () => {
    console.log('Someone is listening...');
})
