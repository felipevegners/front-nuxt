const app = require('express')()
module.exports = { path: '/', handler: app }

app.get('/new-account', (req, res) => {
    res.send('world')
})