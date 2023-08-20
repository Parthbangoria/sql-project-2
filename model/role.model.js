const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const role = sequelize.define("role", {
    name: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    role :{
          type : DataTypes.STRING,
        //   allowNull : false
    },
    // guard_name: {
    //     type: DataTypes.STRING,
    //     // allowNull: false
    // }

}, {
    tableName: "role"
});

module.exports = role