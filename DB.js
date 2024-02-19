const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://seksimo:simo123%40@cluster0.l5u5zsd.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser : true})
var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection faild')
})
connection.on('connected', ()=>{
    console.log('Mongo DB connection seccessful')
})

module.exports = mongoose




