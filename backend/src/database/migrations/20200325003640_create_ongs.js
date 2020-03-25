
exports.up = function(knex) { // up = criacao da tabela
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary(); // chave primaria
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
