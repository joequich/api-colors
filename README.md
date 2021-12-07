# API Colors

Este servicio permite crear, listar y buscar por id los colores almacenados en una base de datos.

## Tecnologías ulizadas

- Express
- Express validator para validar el cuerpo de las solicitudes http
- MongoDB como base de datos
- Mongoose como ODM para la conexión con MongoDB
- Dotenv para las variables de entorno en el ambiente de desarrollo
- Eslint como linter
- ts-node-dev para reiniciar el servidor ante cualquier cambio en el codigo mientras se desarrolla
- Typescript

## Instalación

Utilice el gestor de paquetes [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para instalar los paquetes.

```bash
npm install
```

## Ejecución

```bash
npm run start
```
## Ejemplo de uso

### GET /colores
URL
```code
http://localhost:3000/colores/?page=1&limit=3
```

### GET /colores/:id
URL
```code
http://localhost:3000/colores/1
```

### POST /colores/
URL
```code
http://localhost:3000/colores/
```
raw JSOn
```code
{
    "id": 12,
    "name": "honeysuckle",
    "year": 2011,
    "color": "#D94F70",
    "pantone_value": "18-2120"
}
```

## URL Producción
```code
https://api-colores.herokuapp.com/
```