const express = require('express')
const user = require('./user.controller')
const app = express()
const port = 3000

app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

app.get('*', (req, res) => {
    res.status(404).send('Esta pag no existe')
})

app.post('*', (req, res) => {
    res.status(404).send('Esta pag no existe')
})

app.listen(port, () => {
    console.log('arrancando la APP')
})