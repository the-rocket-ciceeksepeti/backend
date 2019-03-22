const router = require('express').Router();

router.get('/', (req, res) => {
    respond = {
        "temperature": Math.random() * 30 + 5,
        "humidity": Math.random() * 100,
        "location": {
            "lat": 41.015137,
            "long": 28.979530
        },
        "timestamp": new Date().getTime()
    }
    return res.send(respond)
});

module.exports = router