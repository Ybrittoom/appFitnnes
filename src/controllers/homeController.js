//homeController.js
const path = require('path')

const homeController = {
    // mostrar a pagina principal
    mostrarSite: async (req, res) => {
        //envia o arquivo html
        res.sendFile(path.join(__dirname,'..', 'views', 'index.html'))
    },

    paginaExercicios: async (req, res) => {
        //envia o arquivo html
        res.sendFile(path.join(__dirname, '..', 'views', 'exercicios.html'))
    },

    paginaExercicioAtivo: async (req, res) => {
        //envia o arquivo html
        res.sendFile(path.join(__dirname, '..', 'views', 'exercicioAtivo.html'))
    }

}

module.exports = {
    homeController
}