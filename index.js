const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var cors = require('cors')

dotenv.config();

const app = express();
// Load the variables in .env file to the process.env

// Configure Middlewares
app.use(bodyParser.json());
app.use(cors())
// Configure Routes
app.use('/', require('./routes/index'));
app.use('/sensor', require('./routes/sensor/index'))

app.use((err, req, res, next) => {
    if (err.status) {
        res.status(err.status);
    }
    res.json({
        code: err.alias,
        message: err.message,
        messages: err.messages,
    });
    next(err);
});

app.listen(process.env.PORT || 8000);