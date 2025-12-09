//homeRoutes.js
const express = require('express')
const router = express.Router()
const {homeController} = require("../controllers/homeController")

router.get('/nexFit', homeController.mostrarSite)

router.get('/exercicios', homeController.paginaExercicios)

router.get('/exercicio/ativo', homeController.paginaExercicioAtivo)

//exportando para q o app.js possa usar
module.exports = router