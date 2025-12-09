const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8081
const path = require('path')

const webRoutes = require("./src/routes/homeRoutes")

//configuraçao da pasta public para servir arquivos estaticos
app.use('/public', express.static(path.join(__dirname, 'src', 'public')))

app.use('/', webRoutes)



//rodando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})