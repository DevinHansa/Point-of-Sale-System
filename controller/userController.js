const userSchema = require('../model/userSchema');
const bcrypt =require('bcrypt');
const salt = 10;

const regsiter = (req,resp) => {
    
    bcrypt.hash(req.body.password,salt,function(err,hash){
        if(err){
            resp.status(500).json(err);

        }
        const use = new userSchema({

        });
    })

}
const login = (req,resp) => {

    
}

module.export={
    register,login
}