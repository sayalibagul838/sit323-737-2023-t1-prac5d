var express = require('express')

var app = express()
app.use(express.static(__dirname))

var messages = [
    {name: 'Sayali', message: 'HI'},
    {name: 'Jane', message: 'HELLO'}
]
app.get('/', (req,res) => {
    res.send(messages)
})

app.post('/messages', (req,res) => {
    console.log(req.body)
    res.sendStatus(200)
})
var server = app.listen(3040, () => {
    console.log('server is listening on port', server.address().port)
})