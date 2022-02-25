const express = require('express')
const app = require('express')()
const server = require('http').Server(app)
const next = require('next') 
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next((dev))
const handle = nextApp.getRequestHandler()
require('dotenv').config({path: './config.env'})
const connectDb = require('./utilsServer/connectDb')
const PORT = process.env.PORT || 3000
app.use(express.json()) 
connectDb()

nextApp.prepare().then(() => {
    //this is needed so that render all the pages inside the pages folder
    app.all("*", (req, res) => {
        handle(req, res)
    })

    server.listen(PORT, err => {
        if(err) throw err 
        console.log(`Express server runnong on ${PORT}`)
    })
})