'use strict'

import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.status(200),send('good');
});

app.get('/makers/:name',(req,res)=>{

    const nameParams = req.params.name;
    const name = nameParams.charAt(0).toUpperCase() + nameParams.slice(1);;

    res.status(200).send(`<h1>Hola ${name}!</h1>`)
})

app.listen(3000,()=>console.log('server runing in port 3000'))