import { User } from '../models/user.model.js';

export const getAllUsers = async (req,res) => {
    const users = await User.find();
    res.status(200).send(users);
};

export const createUsers = async (req,res) => {
    try{
    const { name , email , password} = req.body;
    const exist = await User.findOne({email});

    if(exist) {
        return res.status(400).send('User already exists');
    }

    User.create({name, email, password});
    res.status(201).send({
        message : 'User Created successfully',
    });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};

export const updateUsers = () => {

};

export const deleteUsers = () => {

};