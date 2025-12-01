const path = require('path')

exports.mostrarSite = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
};