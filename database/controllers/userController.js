const db = require("../models");
const User = db.Users;
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

    loginUser: async (req, res) => 
    {
        try 
        {
            const { username, password } = req.query
            const checkLogin = await User.findOne({
                where: { username }
            })

            if (!checkLogin) 
            {
                return res.status(404).send({
                    message: 'User not found'
                })
            }
            
            const isValidPassword = await bcrypt.compare(password, checkLogin.password)

            if (!isValidPassword) {
                let countAttemp = await User.update(
                    { loginAttemp: checkLogin.loginAttemp + 1 },
                    { 
                        where: { username }
                    }
                )

                if (countAttemp == 3) {
                    await User.update(
                        {isVerified: false}, 
                        { 
                            where: { username }
                        }
                    )
                    return res.status(401).send({
                        message: 'Your account has been suspend'
                    })
                }

                return res.status(401).send({
                    message: 'Incorrect Password'
                })
            }

            await User.update
            (
                { loginAttemp: 0 },
                {
                    where: {username}
                }
            )

            const payload = 
            {
                id: checkLogin.id
            }

            const token = jwt.sign(payload, 'Acarakeun')

            res.status(200).send({
                token,
                message: 'Login Success',
                result: checkLogin
            });
        } catch (error) 
        {
            console.log(error);
            res.status(400).send({ message: error.message });
        }
    },

    keepLogin: async (req, res) => 
    {
        try 
        {
            const result = await User.findOne({
                where: 
                {
                    id: req.user.id
                }
            })
            res.status(200).send(result)
        } 
        catch (error) 
        {
            console.log(error);
            res.status(400).send({ message: error.message })
        }
    },

    verifyUser: async (req, res) => 
    {
        try 
        {
            await User.update({ isVerified: true }, 
            {
                where: { id: req.user.id }
            })

            res.status(200).send('Account has been Verified')
        } 
        catch (error) 
        {
            console.log(error);
            res.status(400).send({ error: error.message })
        }
    }
};
