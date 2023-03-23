const express = require('express')
const app = express()
const users = require('./users.json')

app.use(express.json())

app.get('/users', (req, res) => 
{
    res.status(200).json(users)
})

app.get('/users/:id', (req, res) => 
{
    const id = parseInt(req.params.id)
    const users = users.find(user => user.id === id)
    res.status(200).json(users)
})

app.post('/users', (req, res) => 
{
    users.push(req.body)
    res.status(200).json(users)
})

app.listen(8181, () => 
{ 
    console.log("server go") 
})

