const db = require("../models");
const User = db.Users;
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const handlebars = require('handlebars');
// const transporter = require('../middleware/transporter');

module.exports = 
{
    getCashier: async (req, res) => 
    {
        try 
        {
            const result = await User.findAll({
                where: { isAdmin: false }
            });
            res.status(200).send(result);
        } 
        catch (error) 
        {
            console.log(error);
            res.status(400).send({ message: error.message });
        }
    },

    registerCashier: async (req, res) => {
        try {
            const { fullname, username, email, password } = req.body

            const checkUser = await User.findOne({
                where: { [Op.or]: [ {username}, {email} ] }
            })

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            if (checkUser == null) {
                const result = await User.create({
                    fullname,
                    username,
                    email,
                    password: hashPassword
                });

                // const payload = {
                //     id: result.id
                // }

                // const token = jwt.sign(payload, process.env.MYSQL_PASSWORD)

                // const data = fs.readFileSync('./template.html', 'utf-8')
                // const tempCompile = await handlebars.compile(data)
                // const tempResult = tempCompile({ username: username, link: `http://localhost:3000/verify/${token}` })

                // await transporter.sendMail({
                //     from: 'altairlink26@gmail.com',
                //     to: email,
                //     subject: 'Email Confirmation',
                //     html: tempResult
                // })

                return res.status(200).send({status: "Register Success"});
            } else {
                return res.status(400).send({
                    message: 'username or email has been used'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: "Failed Register"});
        }
    },

    updateStatusCashier: async (req, res) => {
        try {
            const { isVerified } = req.body
            const statusUpdate = await User.update(
                { isVerified },
                { where: { id: req.params.id } }
            )
            return res.status(200).send(statusUpdate)
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: "Failed Change Status"});
        }
    },

    deleteCashier: async (req, res) => {
        try {
            await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).send('Cashier Deleted');            
        } catch (error) {
            console.log(error);
        }
    }
};
