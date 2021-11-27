// importation modules
const express = require('express')
const fs = require('fs')
const ejs = require('ejs')

// apps express
const site_client = express()
const site_client_config = express()

// constantes
const port = 80
const port_config = 8080


// Début Site Client 

site_client.use(express.urlencoded({ extended: true }))
site_client.use(express.json())


site_client.use('/', express.static(__dirname + '/site/'))

site_client.listen(port, () =>{
    console.log(`Le site client est bien lancé sur http://127.0.0.1:${port}`)
})


site_client.get ("/", (req, res)=>{
        
})

//Fin du site client


// Début site config_config

site_client_config.use(express.urlencoded({ extended: true }))
site_client_config.use(express.json())
site_client_config.set('view engine', 'ejs')


site_client_config.use('/', express.static(__dirname + '/site_config/'))

site_client_config.listen(port_config, () =>{
    console.log(`Le site config est bien lancé sur http://127.0.0.1:${port_config}`)
})


site_client_config.get ("/", async (req, res)=>{
   
    let list_fichier = []
    
    await fs.readdir("./site/", (err, files) => {
        files.forEach(file => {
          list_fichier.push(file)
        })
      })
      console.log(list_fichier)

    res.render(__dirname + "/site_config/index.ejs", {
        'port' : port,
        'liste' : list_fichier
    })


})