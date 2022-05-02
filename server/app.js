const express=require('express');
const BodyParser = require('body-parser');
const App=express()
const usersRouter=require('./routes/users')
App.use('/users',usersRouter)
App.listen(3000)