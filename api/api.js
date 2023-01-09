const express = require('express');
const user = require('./user.controller')
const app = express();
const port = 3000;

app.get('/', user.list);
//! 200 ok (object, array or string)

app.post('/', user.create)
//! 201 ok (create)

app.get('/:id', user.get)
//! 200 ok (get)

app.put('/:id', user.update);
//! 204 ok (update)

app.patch('/:id', user.update);
//! 204 ok (update)

app.delete('/:id', user.destroy)
//! 204 ok (delete)

app.get('*', (req,res) => {
    res.status(404).send('This page not exist')
})
//! This page not exist

app.listen(port, () => {
    console.log('App ON')
})
//! Application on



