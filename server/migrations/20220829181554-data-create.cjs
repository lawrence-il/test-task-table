'use strict';

let modelData = { schema: 'public', tableName: 'Data' };

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(modelData, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            date: { type: Sequelize.DATE, defaultValue: new Date() },
            name: { type: Sequelize.STRING },
            quantity: { type: Sequelize.INTEGER },
            distance: { type: Sequelize.INTEGER },
            createdAt: { type: Sequelize.DATE, defaultValue: new Date() },
            updatedAt: { type: Sequelize.DATE, defaultValue: new Date() },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(modelData);
    },
};
