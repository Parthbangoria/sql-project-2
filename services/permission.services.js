const  Permissions = require("../model/permission.model");


exports.createPermission = async (data) => {
    try {
        const newUser = await Permissions.create(data);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

//     let {permission_id} = data;
    //     if(permission_id){
    //    const checkpermissionId = await  permissionModel.findbypk(permission_id)     
    //    if(!checkpermissionId){
    //     return({
    //         error : true,
    //         message : "permission id not found"
    //     })
    //    } 
    // }




