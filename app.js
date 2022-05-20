const express = require("express")
const app = express();
const path = require('path');

app.listen(3000, () => console.log("server con puerto 3000"))

app.use( express.static( 'public' ))
app.use( express.static( 'views' ))

app.use(express.static(path.join(__dirname, "./public")) )

app.get("/", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/index.html"))
})

app.get("/ofertas", (req, res) => {
    res.sendFile (path.join (__dirname, "./ofertas.html"))
})

app.get("/ayuda", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/ayuda.html"))
})

app.get("/creacuenta", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/creacuenta.html"))
})

app.get("/ingresa", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/ingresa.html"))
})

app.get("/misCompras", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/misCompras.html"))
})

app.get("/register", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/register.html"))
})

app.get("/tiendasOficiales", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/tiendasOficiales.html"))
})

app.get("/vender", (req, res) => {
    res.sendFile (path.join (__dirname, "./views/vender.html"))
})

// app.get("/", (req, res) => {
//     res.sendFile (path.join (__dirname, "./views/.html"))
// })

