const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Review = sequelize.define('Review', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Raating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'Id'
            }
        }
    });

    return Review;
};
