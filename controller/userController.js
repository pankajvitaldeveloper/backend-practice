const User = require('../modules/User');

const getUser = async (req,res)=> {
    try{

        const users = await User.find();
        res.json(users);

    }
    catch(err){
        console.error("error in getuser", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const createUser = async (req,res)=> {
    try{
        const {name, email, password} = req.body;
        const user = await User.create({
            name, email, password
        })
        res.status(201).json(user)
    }
    catch(err){
        console.error("error in createuser", err)
    }
}

const updateUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.findByIdAndUpdate(req.param.id, req.body, {
            name, email, password
        }, {
            new: true,
        })

        res.status(200).json(user)
    }
    catch(err){
        console.error("errer update user",  err)
    }
}

const deleteUser = async (req, res) => {
    try{
        const id = req.param.id;
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({
            message: "User deleted successfully",
            user: user
        })
    }
    catch(err){
        console.error("error in delete user", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}