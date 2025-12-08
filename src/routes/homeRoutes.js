//homeRoutes.js
const express = require('express')
const router = express.Router()
const {homeController} = require("../controllers/homeController")

router.get('/nexFit', homeController.mostrarSite)

router.get('/exercicios', homeController.paginaExercicios)

//exportando para q o app.js possa usar
module.exports = router