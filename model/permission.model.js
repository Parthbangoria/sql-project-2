const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Permissions = sequelize.define("Permissions", {
    name: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    // permission :{
    //       type : DataTypes.STRING,
    //     //   allowNull : false
    // },
    guard_name: {
        type: DataTypes.STRING,
        // allowNull: false
    }

}, {
    tableName: "permissions"
});

module.exports = Permissions;




