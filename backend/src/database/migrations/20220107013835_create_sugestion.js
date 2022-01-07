
exports.up = function(knex) {
        return knex.schema.createTable ('sugestions', function (table) {
           table.increments()
           
           table.string ('title').notNullable();
           table.string ('description').notNullable();
           table.string ('store_sector').notNullable();
           table.string ('name').notNullable();
           
           table.string('user_id').references('id').inTable('users')
           
  
});
}
exports.down = function(knex) {
  return knex.schema.dropTable('sugestions');
};
