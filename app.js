const express = require('express')
const path = require('path') // Importe o módulo 'path'
require('dotenv').config();

const app = express()
const { homeRoutes } = require("./src/routes/homeRoutes") // Assumindo uma rota para a Home

const PORT = process.env.PORT || 3000 // Use uma porta padrão caso .env falhe

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', homeRoutes)

app.listen(PORT, () => {
    console.log(` Servidor rodando em http://localhost:${PORT}`)
})