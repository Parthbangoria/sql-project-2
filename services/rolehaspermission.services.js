const  rolesHasPermissions = require("../model/permissionrole.model");
const  permissionModel = require("../model/permission.model");
const  roleModel = require("../model/role.model");
const { and } = require("sequelize");



exports.createRolePermission = async (data) => {
    try {
       let {permissionId,roleId} = data;
    //    let {roleId} = data;
    // console.log(d)
       let permissionid = await permissionModel.findByPk(permissionId);
    //    console.log(permissionid);
       let roleid = await roleModel.findByPk(roleId);
    //    console.log(roleid)
      if(permissionid && roleid) {
         console.log(" they both exixts");
         const newUser = await rolesHasPermissions.create(data);
         return newUser;
      }
      else {
        console.log ("they dont exixst")
    }
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};
