
const jwt = require('jsonwebtoken')
const User = require("../model/User/User");
const isLogin =  (req, res, next) => {
    
    //Get token from header
    const token = req.headers.authorization?.split(" ")[1];
   

    //?Verify the token
    jwt.verify(token, "anykey", async (err, decoded)=>{
       //add user to request object;
       const userId = decoded?.user?.id;
        
       const user = await User.findById(userId).select("username email role _id");
       //save user into req obj
         req.userAuth = user;
         if(err){
            const err = new Error("Token expried/Invalid");
            next(err);
         }
         else{
            next();
         }
    });
};


module.exports = isLogin;