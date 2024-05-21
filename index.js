const express = require('express')
const users = require('./data/agentes')
const app = express()
const jwt = require('jsonwebtoken')
const path = require('path')

app.use(express.json())

app.listen(3000, () => console.log('Servidor escuchado por el puerto 3000'))


//Servidor para archivos estáticos desde la carpeta public 
app.use(express.static(path.join(__dirname + '/public')));

const secretKey = "superClave"

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
});

// Paso 1
app.get("/SignIn", (req, res) => {
    // Paso 2
    const { email, password } = req.query
    // Paso 3
    const user = agentes.results.find((u) => u.email == email && u.password == password);
    // Paso 4
    if (user) {
        
        // Paso 5
        const token = jwt.sign({
                               exp: Math.floor(Date.now() / 1000) + 240,
                               data: user
                              }, secretKey);
        // Paso 6
        res.send(`
            <a href="/dashboard?token=${token}"> <p> Ir al Dashboard </p></a>
            Bienvenido, ${email}.

            <script>
                localStorage.setItem('token', '${token}')
            </script>`
        );
    } else {
        // Paso 7
        res.send("Usuario o contraseña incorrecta");
    }

});

app.get('/dashboard',  (req, res) => {
    console.log("Bienvenido a la ruta Dashboard")
    const token = req.query.token;
    if (!token) {
        res.status(401).send("No hay token, no esta Autorizado");
    } else {
        jwt.verify(token, secretKey, (err, data) => {
            console.log("Valor de Data: ", data);
            err ? 
            res.status(403).send("Token inválido o ha expirado")
            : 
            res.status(200).send(`Bienvenido a la ruta Dashboard, ${data.email}`);
        });
    }


});