module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    username: 'qlue',
    password: 'qlue1234',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
