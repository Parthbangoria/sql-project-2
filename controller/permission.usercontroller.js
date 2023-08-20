const userpermissionServices = require("../services/permission.services");



exports.createPermissions = async (req, res) => {
        
    const data = req.body;
    console.log(data);
    const result = await userpermissionServices.createPermission(data);

    if (!result) {
        return res.status(500).send({
            message: result.massage,
        });
    }

    return res.status(200).send({
        message: "Successfully processed data.",
    });
}
