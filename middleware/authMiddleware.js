const jwt = require('jsonwebtoken');
const secretKey=process.env.SECRET_KEY;

const verifyTokens=(req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        return res.status(403).json({'error':'token is missing'});
    }
    jwt.verify(token, secretKey,(err,decoded)=>{
        if(err){
            return res.status(400).json({'error':'token is invalid'})
        }

       next();
    });
}

module.exports=verifyTokens;
