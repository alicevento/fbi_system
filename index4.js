const express = require('express')
const users = require('./data/users.js')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.listen(3000, () => console.log('Your app listening on port 3000'))
const secretKey = "superClave"

app.get('/', (req, res) => {
  res.send('Probando servidor...')
})

// Paso 1
app.get("/login", (req, res) => {
    // Paso 2
    const { email, password } = req.query
    // Paso 3
    const user = users.find((u) => u.email == email && u.password == password);
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
            res.status(200).send("Autorizado a la ruta: "+data.data.email );
        });
    }


});