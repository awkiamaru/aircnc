let dataBase = ''
let password = ''
let username = ''
// Mongo Connect datas

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const socketio  = require('socket.io');
const http = require('http')

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};



io.on('connection', socket =>{
    console.log('====================================');
    console.log('Connected user!', socket.id);
    console.log('====================================');
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
})


app.use((req,res,next) =>{
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
})


mongoose.connect(`mongodb+srv://${username}:${password}@aircnc-jkc9j.gcp.mongodb.net/${dataBase}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,

})




app.use(cors());

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

server.listen(3300);


