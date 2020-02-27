const express = require('express')
const logs = require('express').Router()
const Logs = require('../models/logs.js')

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Presentation Routes
// Index
logs.get('/', (req, res) => {
    Logs.find({}, (err, allLogs) => {
        if(err){
            res.send('You done messed up bro')
        }
        res.render('logs/index.ejs', {
            logs: allLogs,
            currentUser: req.session.currentUser
        })
    })
})

// New
logs.get('/new', isAuthenticated, (req, res) => {
    res.render('logs/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// Show
logs.get('/:id', isAuthenticated, (req, res) => {
    if(req.session.currentUser) {
    Logs.findById(req.params.id, (err, foundLog) => {
        res.render('logs/show.ejs', {
            log: foundLog,
            currentUser: req.session.currentUser
        })
    })
    } else {
        res.redirect('/sessions/new')
    }

})


// Create
logs.post('/', isAuthenticated, (req, res) => {
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
logs.get('/:id/edit', isAuthenticated, (req, res) => {
  Logs.findById(req.params.id, (error, foundLog) => {
    res.render('logs/edit.ejs', {
      log: foundLog,
      currentUser: req.session.currentUser
    })
  })
})
// Update
logs.put('/:id', isAuthenticated, (req, res) => {
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
logs.delete('/:id', isAuthenticated, (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.redirect('/logs')
  })
})


module.exports = logs
