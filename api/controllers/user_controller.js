const mongoose = require('mongoose');
const UserModel = require('../models/users_model');
const jwt = require('jsonwebtoken');

module.exports = {
    signup: (req, res) => {
        const { username, password, author_pseudonym } = req.body;
        console.log(username)
        UserModel.find({ username }).then((user) => {
            if (user.length >= 1) {
                console.log(user)
                return res.status(404).json({
                    message: "User name exist"
                })
            }

            const user_model = new UserModel({
                _id: new mongoose.Types.ObjectId(),
                username,
                password,
                author_pseudonym
            });

            return user_model.save();
        }).then(() => {
            res.status(200).json({
                message: "User created !"
            });
        }).catch(error => {
            console.log(error)
            res.status(500).json({
                error
            });
        });
    },

    login: (req, res) => {
        const { username, password } = req.body;

        UserModel.find({ username }).then((users) => {
            if (users.length === 0) {
                return res.status(401).json({
                    message: "Auth faild"
                })
            }

            const [user] = users;
            if (password != user.password){
                return res.status(500).json({
                    message: "Auth faild"
                });
            }

            const token = jwt.sign({
                id: user.id,
                username: user.username,
            },process.env.JWT_KEY,
            {
                expiresIn: "1H"
            }
            );
            return res.status(200).json({
                message: "Auth successful",
                token
            });
        })
    },

}