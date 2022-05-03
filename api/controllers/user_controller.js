const mongoose = require('mongoose');
const UserModel = require('../models/users_model');

module.exports = {
    sinup: (req, res) => {
        const { username, password, author_pseudonym } = req.body;
        console.log(username)
        UserModel.find({username}).then((user) => {
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
        UserModel.find().then((users)=>{
            res.status(200).json({
                users
            })
        }).catch(error => {
            res.status(200).json({
                error
            })
        })
    },

    delteUser: (req, res) => {
        const userId = req.params.userId;
        res.status(200).json({
            message: `Delete user: ${userId}`
        })
    },

    updateUser: (res, req) => {
        const userId = req.params.userId;
        res.status(200).json({
            message: `Update user: ${userId}`
        })
    }
}