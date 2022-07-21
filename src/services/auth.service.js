
const User = require('../models/User');

async function register(email, password){

   const candidate = await User.findOne({email, password});

   if(candidate){
      return {message: 'User exists'}
   }
   
   return result;
}

async function login(user, password){

   return result;
}

module.exports = {
   register,
   login
}