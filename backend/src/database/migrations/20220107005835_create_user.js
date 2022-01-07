
exports.up = function(knex) {
  return knex.schema.createTable ('users', function (table) {
     table.string ('id').primary();
     table.string ('name').notNullable();
     table.string ('email').notNullable();
     table.string ('password').notNullable();
     table.string ('whatsapp').notNullable();
     table.string ('store_sector').notNullable();
     
  }); 
};

exports.down = function(knex) {
  knex.schema.dropTable('users');

};
