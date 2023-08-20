const rolePermissionServices = require("../services/rolehaspermission.services");



exports.createRolePermissions = async (req, res) => {
        
    const data = req.body;
    
    const result = await rolePermissionServices.createRolePermission(data);

    if (!result) {
        return res.status(500).send({
            message: "error",
        });
    }

    return res.status(200).send({
        message: "Successfully processed data.",
    });
}
