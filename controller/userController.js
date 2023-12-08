const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');
const salt = 10;
const nodemailer = require('nodemailer');

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
}

module.exports = {
    register,
    login
};



