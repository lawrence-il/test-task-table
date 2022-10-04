'use strict';


module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Data', [{
            date: new Date(),
            name: 'Клубника',
            quantity: 47,
            distance: 999,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Data', null, {});
    },
};