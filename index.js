const express = require('express');
const mail = require('./sendMail');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(express.json());

app.post('/', async (req, res) =>{
    await mail.sendMailFunction(req, res);
});

app.listen(port, () => console.log(`My app listening on port ${port}!`))