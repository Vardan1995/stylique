/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt')
exports.seed = async function (knex) {
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash("123456", salt)
  await knex('user').del()
  await knex('user').insert([
    {
      name: "moderator1",
      password: password,
      login: "moderator1",
      role: "moderator"
    },
    {
      name: "admin1",
      password: password,
      login: "admin1",
      role: "admin"
    },
    {
      name: "member1",
      password: password,
      login: "member1",
      role: "member"
    },
  ]);
};
