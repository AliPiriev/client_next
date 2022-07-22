
const User = require('../models/User');
const bcrypt = require('bcryptjs');
async function register(email, password){

   const candidate = await User.findOne({email});

   if(candidate){
      return {
         status: 400,
         message: 'User exists'
      }
   }

   const hashedPassword = await bcrypt.hash(password, 12);
   const user = new User({email, password: hashedPassword});
   await user.save();
   
   return {
      status: 200,
      message: 'User created'
   };
}

async function login(user, password){

   return true;
}

module.exports = {
   register,
   login
}