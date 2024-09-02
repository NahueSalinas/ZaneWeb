const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Users = sequelize.define('Users', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false 
          },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Users;
};
