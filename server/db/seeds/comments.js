
exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex('comments').del()
     .then(function () {
      //Inserts seed entries
      return knex('comments').insert([
        {id: 1, name: 'bob', comment: 'hello'},
        {id: 2, name: 'bill', comment: 'hi'},
        {id: 3, name: 'ben', comment: 'ho'},
        {id: 4, name: 'beans', comment: 'lets'},
        {id: 5, name: 'bags', comment: 'go'},
      ]);
    });
};
