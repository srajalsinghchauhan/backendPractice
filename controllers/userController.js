const User = require('../models/User')

const createUser = async (req,res)=>{
    try{
        const {name,email}= req.body;
        const user = new User({name,email});
        await user.save();
        res.status(201).json({message:"User created successfully",user});
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  };
  
  module.exports = {
    createUser,
    getAllUsers,
  };