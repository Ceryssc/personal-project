import request from 'superagent'

const commentUrl = 'http://localhost:3000/api/v1/comments/'

export function getComments (callback) {
  request
    .get(commentUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}
