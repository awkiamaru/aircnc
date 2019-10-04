const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

let dataBase = 'semana09'
let password = 'coxinha123'

mongoose.connect(`mongodb+srv://fragment:${password}@aircnc-jkc9j.gcp.mongodb.net/${dataBase}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,

})

app.use(cors());

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3300);


