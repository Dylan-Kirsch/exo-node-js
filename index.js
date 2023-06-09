const express = require('express')
const app = express()
const users = require('./users.json')

app.use(express.json())

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    res.status(200).json(user)
})

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    users.splice(users.indexOf(user),1)
    res.status(200).json(users)
})

app.put('users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    user.user = req.body.user,
    user.mdp = req.body.mdp,
    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(200).json(users)
})
 

app.listen(8080, () => { 
    console.log("server go") 
})

