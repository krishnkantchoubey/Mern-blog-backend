const mongoose = require('mongoose')
//connect to data base


const connectDB = async ()=>{
    try{
      await mongoose.connect(
            "mongodb+srv://krishnakant3005:sYuP9C2mRfECLrf1@mern-blog-v1.xsszm6d.mongodb.net/mern-blog?retryWrites=true&w=majority"
        );
     console.log("DB has been connected");
    }
    catch(error){
        console.log('DB connection Failed...', error.message);
    }
};

module.exports = connectDB;

