import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Data = sequelize.define('Data', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATE },
    name: { type: DataTypes.STRING },
    quantity: { type: DataTypes.INTEGER },
    distance: { type: DataTypes.INTEGER }
});


export { Data };
