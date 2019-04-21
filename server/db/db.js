const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getComments(db = connection) {
    return db('comments').select()
  }

  module.exports = {
    getComments,
    
  }