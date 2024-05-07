const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/test', (req, res)=>{
    res.send("Server is operational")
})

app.get('/', (req, res)=>{
    res.send("Server running functionally!")
})

app.get('/message', (req, res)=>{
    res.send("Hello from my server!")
})

app.listen(port, ()=>{
    console.log('Server is running on port ' + port)
})