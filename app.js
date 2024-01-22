const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.listen(3500, () => {
    console.log('servidor funcionando en puerto 3500')
})

app.get("/", function (req, res){
    const homepath = path.join(__dirname, "/views/home.html")
    res.sendFile(homepath)
})

app.get('/register', function(req, res){
    const pathReg = path.join(__dirname, 'views/register.html')
    res.sendFile(pathReg)
})

app.get('/login', function(req, res){
    const pathLog = path.join(__dirname, 'views/login.html')
    res.sendFile(pathLog)
})