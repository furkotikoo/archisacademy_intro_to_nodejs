
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_types').insert([
        { id: 1, name: 'admin', description: "Administrator" },
        { id: 2, name: 'guest', description: "Guest" },
        { id: 3, name: 'user', description: "User" }
      ]);
    });
};
