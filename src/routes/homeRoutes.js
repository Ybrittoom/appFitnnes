const express = require('express')
const router = express.Router()

const homeController = require("../controllers/homeController")

router.get('/', homeController.mostrarSite)

//exportando para q o app.js possa usar
module.exports = router