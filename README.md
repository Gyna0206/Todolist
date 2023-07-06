# Proyecto TodoList

## Descripción

Este proyecto es una API RESTful desarrollada con Express.js que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en un modelo de lista de tareas. 

## Funcionalidades

- Obtener todas las tareas. 
- Obtener una tarea por  su ID.
- Modificar una tarea.
- Crear una tarea.
- Eliminar una tarea. 


## Tecnologías utilizadas
- JavaScript
- Node
- Expresss
- MongoDB
- Mongoose 

## Instalación
1. Clona este repositorio en tu maquina local
2. Navega al directorio del proyecto
3. Instala las dependencias necesarias

## Uso 
1. Inicia la aplicación: 
node. index.js

2. Accede al Hola mundo. 

http://localhost:3005/

3. Desde postman puedes probar los siguentes endpoints:
- localhost:3005/api/task
- localhost:3005/api/task/create con el siguiente json
{
    "name":"Hacer el fron",
    "description" :"Realizar el fron de la aplicación de todolist"
}
localhost:3005/api/task/'id'
localhost:3005/api/task/delete/'id'
localhost:3005/api/task/update/'id'
{
    "name":"Probar endpoinsts",
    "description" :"Probar los endpoinsts presentes en la aplicación de todo lsit"
}


## Autors

- [@Gyna Herrera](https://github.com/Gyna0206)