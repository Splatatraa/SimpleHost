const express = require('express')


const app = express()

const app_config = express()

const port = 80

const port_config = 8080


pp.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', express.static(__dirname + '/site/'))

app.listen(port, () =>{
    console.log(`Le serveur est bien lancé sur http://127.0.0.1:${port}`)
})


app.get ("/", (req, res)=>{
        
})

