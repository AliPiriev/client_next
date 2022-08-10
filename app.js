const express = require('express');
const bodyParser = require('body-parser')


process.env["NODE_CONFIG_DIR"] = __dirname + "/src/config";
const config = require('config');
const mongoose = require('mongoose');

const auth = require('./src/routes/auth.routes')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = config.get('port') || 5000;

app.use('/api/auth', auth);
// app.use('/', (req, res) =>{
//    res.status(200).json('academy server application')
// })

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