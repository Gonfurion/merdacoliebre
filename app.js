const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/ingresa', (req,res)=>{
    res.sendFile(__dirname + '/views/ingresa.html');
});

app.get('/ayuda', (req,res)=>{
    res.sendFile(__dirname + '/views/ayuda.html');
});

app.get('/misCompras', (req,res)=>{
    res.sendFile(__dirname + '/views/misCompras.html');
});

app.get('/ofertas', (req,res)=>{
    res.sendFile(__dirname + '/views/ofertas.html');
});
app.get('/vender', (req,res)=>{
    res.sendFile(__dirname + '/views/vender.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/tiendasOficiales', (req,res)=>{
    res.sendFile(__dirname + '/views/tiendasOficiales.html');
});
