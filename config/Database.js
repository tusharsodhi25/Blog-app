const mongoose = require('mongoose');


require('dotenv').config();


const dbconnect = ()=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('DB CONNECTED');
    })
    .catch((error)=>{
          console.log('ERROR',error);
          process.exit(1);
    }
    )
}

module.exports = dbconnect;
