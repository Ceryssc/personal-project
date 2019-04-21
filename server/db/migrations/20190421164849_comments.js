
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('comments', function (table) {
        table.increments().primary()
        table.string('name')
        table.string('comment')

    })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments')
}

