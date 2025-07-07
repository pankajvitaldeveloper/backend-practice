const express = require("express")
const router = express.Router();

const { getUser, createUser, updateUser, deleteUser } = require('../controller/userController');

// Define routes
router.get('/userall', getUser);
router.post('/usercreate', createUser)
router.put("/userupdate/:id", updateUser);
router.delete('/userdelete/:id', deleteUser)

module.exports = router;
