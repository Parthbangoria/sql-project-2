const express = require("express");
const app = express();
const permissionControllers = require("./controller/permission.usercontroller");
const roleControllers = require("./controller/role.usercontroller");
const rolePermissionControllers = require("./controller/rolehaspermission.usercontroller");

const sequelize = require('./config/database');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());







app.post("/create",permissionControllers.createPermissions);
app.post("/rolecreate",roleControllers.createRole)
app.post("/rolepermission",rolePermissionControllers.createRolePermissions)
// Sync models with the database and create tables
sequelize.sync({ force: false, logging: false })
    .then(() => {
        console.log('Database is connected!');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on Port:${PORT}`);
});
