const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();

// Load the variables in .env file to the process.env
dotenv.config();
// const cache = require('./helpers/redis');

// Connect to the db and listen if success

// Configure Middlewares
app.use(morgan(process.env.LOGGING_LEVEL || 'tiny'));
app.use(bodyParser.json());

// Configure Routes
app.use('/', require('./routes/index'));
app.use('/delivery', require('./routes/delivery/index'))
// app.use('/customer', require('./routes/customer'));
// app.use('/courier', require('./routes/courier'));
// app.use('/cargo', require('./routes/cargo'));
// app.use('/webhook', require('./routes/webhook'));

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