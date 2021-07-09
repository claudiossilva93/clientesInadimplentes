const express  = require('express');

const Cliente = require('../models/Cliente')

const router = express.Router();


router.post('/register', async (req, res) =>{

    try{

        const cliente = await Cliente.create(req.body);

        return res.send(cliente);

    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Falha ao cadastrar o cliente' });
    }

});

router.get('/', async (req, res) =>{

    const clientes = await Cliente.find();

    return res.send(clientes);

});

module.exports = app => app.use('/cliente', router)