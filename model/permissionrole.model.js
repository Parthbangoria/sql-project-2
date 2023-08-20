const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const role = require("./role.model");
const Permission = require("./permission.model");

const rolesHasPermissions = sequelize.define("rolesHasPermissions", {
    role_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,

    },
    permission_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
    },
},
    {
        tableName: "role_has_permissions",
        timestamps: false,
    });

    rolesHasPermissions.belongsTo(Permission,{foreignKey : "permissionId" })
    rolesHasPermissions.belongsTo(role,{foreignKey : "roleId" })

module.exports = rolesHasPermissions;
