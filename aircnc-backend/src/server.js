const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

let dataBase = 'semana09'
let password = 'coxinha123'

mongoose.connect(`mongodb+srv://fragment:${password}@aircnc-jkc9j.gcp.mongodb.net/${dataBase}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3000);


