const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

mongoose.connect('mongodb+srv://jose:asd123@cluster0.j3vchqg.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())