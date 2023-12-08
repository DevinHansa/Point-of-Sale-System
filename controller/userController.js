const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');
const salt = 10;

const register = (req, resp) => {
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
            return resp.status(201).json({ 'message': 'saved!' });
        }).catch(error => {
            return resp.status(500).json(err);
        });
    });
}

const login = (req, resp) => {
    // Implement login logic here
}

module.exports = {
    register,
    login
};
