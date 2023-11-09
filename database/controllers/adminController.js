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
    getAll: async (req, res) => 
    {
        try 
        {
            const result = await User.findAll();
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
            const { username, email, password } = req.body

            const checkUser = await User.findOne({
                where: { [Op.or]: [ {username}, {email} ] }
            })

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            if (checkUser == null) {
                const result = await User.create({
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
    }
};
