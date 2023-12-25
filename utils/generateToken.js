const jwt = require('jsonwebtoken');

const generateToken = (user) => {

    //create payload for user
    const payload = {
        user:{
            id: user.id
        }
    }
    //sign the token with a secret key
    const token = jwt.sign(payload, 'anykey',{
        expiresIn: 3600, //Expire 1 hr
    });
    return token;
};
     

module.exports = generateToken;

