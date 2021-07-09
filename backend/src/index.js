const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

var corsOptions = {
    origin: 'http://localhost'
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions))

require('./controllers/clienteController')(app);

app.listen(3006);

