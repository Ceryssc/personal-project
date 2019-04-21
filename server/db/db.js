const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



module.exports = {
  getComments,
  addComments
  
}
function getComments(db = connection) {
    return db('comments').select()
  }




  function addComments(comment, db = connection) {
    console.log("addcomments has been called in dbjs")
    return db('comments')
      .insert({
        name: comment.name,
        comment: comment.comment
      })
  }
