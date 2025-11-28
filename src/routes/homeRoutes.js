const express = require('express')
const router = express.Router()
const { getHomePage } = require('../controllers/homeController')//importando o controller

router.get('/', getHomePage.)

module.exports = router