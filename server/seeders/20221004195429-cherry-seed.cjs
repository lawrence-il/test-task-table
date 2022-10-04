'use strict';


module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Data', [{
            date: new Date(),
            name: 'Вишня',
            quantity: 23,
            distance: 34,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Data', null, {});
    },
};