module.exports = {
    addUser: (req, res) => {
        res.status(200).json({
            message: "User created !!"
        });
    },

    getUser: (req, res) => {
        res.status(200).json({
            message: "Get user"
        });
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