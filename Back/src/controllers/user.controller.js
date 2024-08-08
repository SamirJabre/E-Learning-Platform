import { User } from '../models/user.model.js';

export const getAllUsers = async (req,res) => {
    const users = await User.find();
    res.status(200).send(users);
};

export const createUsers = async (req,res) => {
    const { name, email, password } = req.body;
    const exist = await User.findOne({email});

    if(exist) {
        return res.status(400).send('User already exists');
    }
    try{
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send({
        message : user,
    });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};

export const logIn = async (req,res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).send('User does not exist');
        }
    
        if (password !== user.password) {
            return res.status(400).send('Invalid credentials');
          }
    
        res.status(200).send({
          message: 'Login successful',
          user,
        });
      } catch (error) {
        res.status(500).send(error.message);
      }
    
}