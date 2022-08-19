//
//
const router = require('express').Router()

// -----------------------------------------------------------------------------
const test = require('./test')
router.get('/test', test.test_get)


// -----------------------------------------------------------------------------
module.exports = router
