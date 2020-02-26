const express = require('express')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const fruitsController = require('./controllers/fruits.js');

const app = express()



const PORT = 3000
/* End Variables */

/* Express Middleware
body parser
static
method override
*/
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
// Using fruits controller is last on purpose! We need access to the files above first or we will get errors
app.use('/fruits', fruitsController);

// Database Connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});




app.listen(PORT, (req, res) => {
    console.log('Someone is listening...');
})
/* End Listen */
