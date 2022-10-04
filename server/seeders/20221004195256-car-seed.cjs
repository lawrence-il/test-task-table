'use strict';


module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Data', [{
            date: new Date(),
            name: 'Машина',
            quantity: 1,
            distance: 302,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Data', null, {});
    },
};