const mongoose = require('../database');


const ClienteSchema = new mongoose.Schema({
    nome:{
        type: String
    },
    valor:{
        type: Number
    },
    desde:{
        type: Date
    }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;