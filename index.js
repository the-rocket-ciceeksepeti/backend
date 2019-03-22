const express = require('express');
const bodyParser = require('body-parser');



const app = express();
// Load the variables in .env file to the process.env

// Configure Middlewares
app.use(bodyParser.json());

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

app.listen(8000);