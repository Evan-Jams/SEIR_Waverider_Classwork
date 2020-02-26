const router = require('express').Router()
const Logs = require('../models/logs.js')

// Presentation Routes
// Index
router.get('/', (req, res) => {
    Logs.find({}, (err, allLogs) => {
        if(err){
            res.send('You done messed up bro')
        }
        res.render('index.ejs', {
            logs: allLogs
        })
    })
})

// New
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Show
router.get('/:id', (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
        if(err){
            res.send(err);
        }
        res.render('show.ejs', {
            log: foundLog
        })
    })
})


// Create
router.post('/', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    // console.log(req.body);
    Logs.create(req.body, (err, newLog) => {
        res.redirect('/logs')
    })
})

// Edit
router.get('/:id/edit', (req, res) => {
  Logs.findById(req.params.id, (error, foundLog) => {
    res.render('edit.ejs', {
      log: foundLog
    })
  })
})
// Update
router.put('/:id', (req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true
  } else {
    req.body.shipIsBroken = false
  }
  Logs.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedModel) => {
      res.redirect('/logs')
    }
  )
})

// Delete
router.delete('/:id', (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.redirect('/logs')
  })
})


module.exports = router
