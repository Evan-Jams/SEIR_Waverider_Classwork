const express = require('express')
const bookmarks = express.Router()
const Bookmark = require('../models/bookmarks.js')

// Index
bookmarks.get('/', (req, res) => {
    Bookmark.find({}, (err, foundBookmarks) => {
        if (err) {
            res.status(400).json({err: error.message})
        }
        res.status(200).json(foundBookmarks)
    })
})

bookmarks.post('/', async (req, res) => {
    console.log(req.body);
    Bookmark.create(req.body, (err, createdBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).send(createdBookmark)
    })
})

bookmarks.delete('/:id', (req, res) => {
  Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedBookmark)
  })
})

bookmarks.put('/:id', (req, res) => {
  Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedBookmark)
  })
})


module.exports = bookmarks
