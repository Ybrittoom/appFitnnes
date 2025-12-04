const path = require('path')

exports.comecarExercicio = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', ''))
}