
exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex('comments').del()
     .then(function () {
      //Inserts seed entries
      return knex('comments').insert([
        {id: 1, name: 'Bob', comment: 'Hello'},
        {id: 2, name: 'Bill', comment: 'Hi'},
        {id: 3, name: 'Ben', comment: 'Hey'},
    
      ]);
    });
};
