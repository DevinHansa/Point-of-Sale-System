const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');
const salt = 10;
const nodemailer = require('nodemailer');
const jsonwebtoken = require('jsonwebtoken');

const register = (req, resp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hansa8109@gmail.com',
            pass: 'qrsa gmmr letd ybey'
        }
    });

    const mailOptions = {
        from: 'hansa8109@gmail.com',
        to: req.body.email,
        subject: 'New account creation',
        text: 'You have created your account'
    };

    userSchema.findOne({ 'email': req.body.email }).then(result => {
        if (result) {
            // Email already registered
            return resp.status(409).json({ 'error': 'Email already registered' });
        } else {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return resp.status(500).json({ 'error': error });
                } else {
                    bcrypt.hash(req.body.password, salt, function (err, hash) {
                        if (err) {
                            return resp.status(500).json(err);
                        }
                        const use = new userSchema({
                            fullName: req.body.fullName,
                            email: req.body.email,
                            password: hash,
                            activeStatus: req.body.activeStatus
                        });

                        use.save().then(saveResponse => {
                            // Both email and user data saved successfully
                            return resp.status(201).json({ 'message': 'saved!' });
                        }).catch(error => {
                            return resp.status(500).json(error);
                        });
                    });
                }
            });
        }
    });
}

const login = (req, resp) => {
    // Implement login logic here
    userSchema.findOne({'email':req.body.email}).then(selectedUser=>{
        if(selectedUser!=null){
            bcrypt.compare(req.body.password,selectedUser.password,function(err,result){
                if(err){
                    return resp.status(500).json({'message':'internal server error'});
                }

                if(result){
                    const payload={
                        email:selectedUser.email
                    }

                    const secretKey=process.env.SECRET_KEY;
                    const expiresIn='24h';
                    const token = jsonwebtoken.sign(payload,secretKey,{expiresIn});
                    return resp.status(200).json({'token':token});

                }else{
                    return resp.status(401).json({'message':'password incorrect'});
                }
                  
                
                    
            });
        }else{
           return resp.status(404).json({'message':'not found'});
        }
    });
}

module.exports = {
    register,
    login
};



