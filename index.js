const express = require("express");
const agentesData = require("./data/agentes");
const agentes = agentesData.results;
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

app.listen(3000, () => console.log("Servidor escuchado por el puerto 3000"));

const secretKey = "claveAgente";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/token", (req, res) => {
  res.sendFile(token);
});
app.get("/SignIn", (req, res) => {
  // Paso 2
  const { email, password } = req.query;
  // Paso 3
  const user = agentes.find((u) => u.email == email && u.password == password);
  // console.log(user);
  // Paso 4
  if (user) {
    // Paso 5
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 120,
        data: user,
      },
      secretKey
    );
    // Paso 6
    res.send(`
            <a href="/rutarestringida?token=${token}"> <h1> Página muy restringida </h1></a>
            <h3>Bienvenido Agente , ${email}.</h3>

            <script>
                localStorage.setItem('token', '${token}')
            </script>`);
  } else {
    // Paso 7
    console.log("Usuario o contraseña incorrecta");
    res.send("Usuario o contraseña incorrecta");
  }
});

app.get("/rutarestringida", (req, res) => {
  console.log("Bienvenido a la ruta Restringida");
  const token = req.query.token;
  if (!token) {
    res.status(401).send("No hay token, no esta Autorizado");
  } else {
    jwt.verify(token, secretKey, (err, data) => {
      console.log("Valor de Data: ", data);
      err
        ? res.status(403).send("Token inválido o ha expirado")
        : res.status(200).send(`<h1>Bienvenido a la Página super hiper protegida, <br> Agente: ${data.data.email} </h1>`);
    });
  }
});
