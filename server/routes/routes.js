const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  db.getComments()
    .then(comments => {
      res.send(comments)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
    console.log("saveComments has been called in routes ")
    db.saveComments(req.body)
      .then(res.sendStatus(200))
  })


module.exports = router