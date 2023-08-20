const userRoleServices = require("../services/role.services");



exports.createRole = async (req, res) => {
        
    let data = req.body;
    
    const result = await userRoleServices.createRole(data);

    if (!result) {
        return res.status(500).send({
            message: result.massage,
        });
    }

    return res.status(200).send({
        message: "Successfully processed data.",
    });
}
