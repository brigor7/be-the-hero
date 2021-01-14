const express = require('express');
const { errors } = require('celebrate');
const cors = require('cors');

const routes = require('./routes');

const app = express();
//app.use(cors({  origin:'http://endereco.com' }));//Somente aplicação desse endereço acessa backend
app.use(cors()); //Todas aplicações acessam backend
app.use(routes);
app.use(errors());
app.listen(3333);
