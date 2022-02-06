const express = require('express');
const app = express();

const { getUsersDetails, getUserDetailsById, createUser, updateUser, deleteUser } = require('../controllers/UserController')

app.get("/user-details", getUsersDetails);
app.get("/user-details/:id", getUserDetailsById);
app.post("/create-user", createUser);
app.put("/update-user/:id", updateUser);
app.delete("/delete-user/:id", deleteUser);

module.exports = app;