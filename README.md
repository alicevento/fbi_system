# FBI SYSTEM 🥸

## Descripción 
El FBI está abriendo un departamento de informáticay necesita para crear el sistema online que gestione misiones secretas. Este sistema debe permitir la autenticación de agentes mediante credenciales y utilizar JWT para la autorización en las páginas restringidas.

## Requerimientos 
1.- Crear una ruta que autentique a un agente basado en sus credenciales y genere un token con sus datos.
Al autenticar un agente, devolver un HTML que:

Muestre el email del agente autorizado.

2.- Guarde un token en SessionStorage con un tiempo de expiración de 2 minutos.
3.- Disponibilice un hiperenlace para redirigir al agente a una ruta restringida.
4.- Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del agente autorizado, en caso contrario devolver un estado HTTP que indique que el usuario no está autorizado y un mensaje que menciona la descripción del error.

## Uso 
1.- Clona este repositorio en tu máquina local.
2.- Abre una terminal en la carpeta del proyecto.
3.- Ejecuta npm install para instalar las dependencias necesarias.

## Instalación
1.- Ejecuta npm start para iniciar el servidor.
2.- Abre tu navegador y ve a http://localhost:3000 para acceder al sistema.

## Estructura del Proyecto
index.html: Interfaz de usuario para el sistema.
data/agentes.js: Archivo que exporta un arreglo de objetos correspondiente a las credenciales de los agentes secretos.
server.js: Archivo principal que contiene el servidor Express y las rutas para la autenticación y las páginas restringidas.

## Author
Alicia Vento