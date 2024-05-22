# FBI SYSTEM 🥸

## Descripción 
El FBI está abriendo un departamento de informática y te ha contratado para crear el sistema online que gestione misiones secretas. Este sistema debe permitir la autenticación de agentes mediante credenciales y utilizar JWT para la autorización en las páginas restringidas.

## Requerimientos 
Crear una ruta que autentique a un agente basado en sus credenciales y genere un token con sus datos.
Al autenticar un agente, devolver un HTML que:
Muestre el email del agente autorizado.
Guarde un token en SessionStorage con un tiempo de expiración de 2 minutos.
Disponibilice un hiperenlace para redirigir al agente a una ruta restringida.
Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del agente autorizado, en caso contrario devolver un estado HTTP que indique que el usuario no está autorizado y un mensaje que menciona la descripción del error.

## Uso 
Clona este repositorio en tu máquina local.
Abre una terminal en la carpeta del proyecto.
Ejecuta npm install para instalar las dependencias necesarias.

## Instalación
Ejecuta npm start para iniciar el servidor.
Abre tu navegador y ve a http://localhost:3000 para acceder al sistema.

## Estructura del Proyecto
index.html: Interfaz de usuario para el sistema.
data/agentes.js: Archivo que exporta un arreglo de objetos correspondiente a las credenciales de los agentes secretos.
server.js: Archivo principal que contiene el servidor Express y las rutas para la autenticación y las páginas restringidas.

## Author
Alicia Vento