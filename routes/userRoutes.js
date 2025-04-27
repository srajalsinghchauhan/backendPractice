const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.post("/users",createUser)

router.get("/getUsers",getAllUsers)

module.exports = router;