const mongoose = require('mongoose')
//connect to data base


const connectDB = async ()=>{
    try{
      await mongoose.connect(process.env.MONGO_URL);
     console.log("DB has been connected");
    }
    catch(error){
        console.log('DB connection Failed...', error.message);
    }
};

module.exports = connectDB;

