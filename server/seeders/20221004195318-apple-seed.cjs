'use strict';


module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Data', [{
            date: new Date(),
            name: 'Яблоко',
            quantity: 50,
            distance: 101,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Data', null, {});
    },
};
