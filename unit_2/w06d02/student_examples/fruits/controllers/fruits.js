// const express = require('express');
// const router = express.Router();
// or
const router = require('express').Router();
const Fruit = require('../models/fruits.js')


// Presentational Routes ******************************/
// Index
router.get('/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        if (error) {
            res.send('You done messed up bro')
        }
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Seed
router.get('/seed', (req, res)=>{
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
router.get('/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('show.ejs', {
            fruit: foundFruit
        });
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('edit.ejs', {
            fruit: foundFruit
        });
    });
});



/* Functional Routes ********************************/
// Create
router.post('/', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.redirect('/fruits')
    });
});

// Update
router.put('/:id', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
        if(err) {
            res.send(err);
        }
        res.redirect('/fruits')
    });
});


// Delete
router.delete('/:id', (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
        res.redirect('/fruits')
    });
});


module.exports = router;
