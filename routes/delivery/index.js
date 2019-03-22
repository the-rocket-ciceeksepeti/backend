const router = require('express').Router();
const {
    store
} = require('../db/index')

router.post('/updateStatus', (req, res) => {
    return res.send(store)
})

module.exports = router