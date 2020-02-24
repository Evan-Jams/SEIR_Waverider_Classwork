const express = require('express')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const app = express()
const Fruit = require('./models/fruits.js')


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



mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, unifiedTopolgy: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
// Presentational Routes ******************************/
// Index
app.get('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        if (error) {
            res.send('You done messed up bro')
        }
        console.log(allFruits);
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

// New
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
})

// Seed
app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});

// Show
app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('show.ejs', {
            fruit: foundFruit
        })
    })
})

// Edit
app.get('/', (req, res) => {

})



/* Functional Routes ********************************/
// Create
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.redirect('/fruits')
    })
})

// Update
app.put('/', (req, res) => {

})
// Delete
app.delete('/fruits/:id', (req, res) => {
    // Fruit[req.params.id].splice(Fruit[req.params.id], 1)
    res.redirect('/fruits')
})






app.listen(PORT, (req, res) => {
    console.log('Someone is listening...');
})
/* End Listen */
