
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(table){
  table.increments();
  table.string('name');
  table.string('poison');
  table.string('accessory');
  table.string('image_url');
  table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
