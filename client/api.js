import request from 'superagent'

const commentUrl = 'http://localhost:3000/api/v1/comments/'

export function getComments (callback) {
  request
    .get(commentUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function appendComments (comment, callback) {
    console.log("appendComments this is being called in apijs")
    request
      .post(commentUrl)
        .send(comment) 
        .end((err, res) => {
        callback(err), res
      })
  }