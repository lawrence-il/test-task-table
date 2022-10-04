'use strict';


module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Data', [{
            date: new Date(),
            name: 'Груша',
            quantity: 7,
            distance: 71,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Data', null, {});
    },
};