
exports.up = function(knex, Promise) {
  return knex.schema.createTable('knowledgearticle', (table) => {
    table.increments()
    table.text('title')
    table.text('articlenumber')
    table.text('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('knowledgearticle')
};
