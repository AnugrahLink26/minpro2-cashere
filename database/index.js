const express = require('express');
const PORT = 2000;
const db = require('./models');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/api', (req, res) => {
    res.send('This is Cashere API');
})

app.listen(PORT, () => {
    // db.sequelize.sync({ alter: true })
    console.log(`Server running on port: ${PORT}`);
});