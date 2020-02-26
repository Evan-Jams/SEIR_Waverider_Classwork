const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const productsController = require('./controllers/products.js')
const app = express()
const PORT = 3000


// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use('/products', productsController);

mongoose.connect('mongodb://localhost:27017/mongoose_store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

mongoose.connection.once('open', () => {
        console.log('connected to mongo, yo!');
})




app.listen(PORT, () => {
    console.log('Someone is listening...');
})
