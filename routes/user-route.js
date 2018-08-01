const User = require('../user-schema/user-schema').User;
const bcrypt = require('bcrypt');

const saltRounds = 10;
module.exports = function (app) {
    app.get("/users", (req, res) => {
        User.find({}, (err, registered) => {
            if (err)
                return res.send(err);

            res.json(registered);
        });
    });
    app.get("/users/:name", (req, res) => {
        User.find({
            "_name": req.params.name
        }, (err, registered) => {
            if (err) {
                return res.send(err);
            }
            res.json(registered);
        });
    });

    app.post("/users/register", (req, res) => {
        let newUser = new User();
        newUser.nama = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.passwordSalt = req.body.passwordSalt;
        newUser.batch = req.body.batch;
        newUser.tahun = req.body.tahun;

        newUser.save((err, registered) => {
            if (err) {
                return res.send(err);
            }
            res.json({
                "status": "Register Successful",
                "data": registered
            });
        });
    });
}