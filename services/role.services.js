const  role = require("../model/role.model");


exports.createRole = async (data) => {
    try {
        const newUser = await role.create(data);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};