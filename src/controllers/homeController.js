//homeController.js
const path = require('path')

const homeController = {
    // mostrar a pagina principal
    mostrarSite: async (req, res) => {
        res.sendFile(path.join(__dirname,'..', 'views', 'index.html'))
    },

    paginaExercicios: async (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'exercicios.html'))
    }

}

module.exports = {
    homeController
}