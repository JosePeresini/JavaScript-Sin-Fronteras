const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.controller');
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb+srv://jose:asd123@cluster0.j3vchqg.mongodb.net/myApp?retryWrites=true&w=majority');

app.get('/users', user.list);
//! 200 ok (object, array or string)

app.post('/users', user.create);
//! 201 ok (create)

app.get('/users/:id', user.get);
//! 200 ok (get)

app.put('/users/:id', user.update);
//! 204 ok (update)

app.patch('/users/:id', user.update);
//! 204 ok (update)

app.delete('/users/:id', user.destroy);
//! 204 ok (delete)

app.get('*', (req,res) => {
    res.status(404).send('This page not exist');
})
//! This page not exist

app.listen(port, () => {
    console.log('App ON');
})
//! Application on



