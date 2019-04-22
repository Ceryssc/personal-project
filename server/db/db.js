const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



module.exports = {
  getComments,
  saveComments
  
}
function getComments(db = connection) {
    return db('comments').select()
  }




  function saveComments(comment, db = connection) {
    console.log("saveComments hasss been called in dbjs")
    return db('comments')
      .insert({
        name: comment.name,
        comment: comment.comment
      })
  }
