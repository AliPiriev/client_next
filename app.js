const express = require('express');

process.env["NODE_CONFIG_DIR"] = __dirname + "/src/config";
const config = require('config');
const mongoose = require('mongoose');

const auth = require('./src/routes/auth.routes')

const app = express();
const PORT = config.get('port') || 5000;

// app.use('/api/auth', auth);

async function start (){
   try{
      await mongoose.connect(config.get('mongoUrl'), {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
   }catch(e){
      console.log(`Server Error ${e.message}`);
      process.exit(1);
   }
}

start();