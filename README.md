
# Backend para tienda de zapatos

## ¿Como lanzar el proyecto?

1). Descarga el repositorio

2). Instala las dependencias con npm init

3). Crea un .env tomando como ejemplo el archivo .env.example

4). Crea una base de datos en mongoose con 3 colecciones (brands,products y users)

5). Ya puedes iniciar con

``node ./src/index.js``

## API DOC

### Productos

para el manejo de los Productos hacemos peticiones a la ruta http://localhost:3000/products

**GET**: Para obtener a todos los productos (No es necesario ningun parametro)

**PUT**: Para crear un nuevo producto

cuerpo de la peticion:

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| name  | String  | Zapatilla 1  | Nombre del producto  |
| brand  | String  | Adidas  | Nombre de la marca (No importan las mayusculas), esta debe existir en la base de datos  |
| stock  | Numero positivo | 900  | Cantidad del producto, debe ser mayor a 0 para mostrarse |
| price  | Numero positivo | 250000  | Precio del producto  |

**DELETE**: Para eliminar un producto

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| id  | id de producto  | 6616cf0237e8d08eef5c5d13 | ID del producto, se puede obtener con la funcion GET  |

para actualizar los Productos hacemos peticiones a la ruta http://localhost:3000/updateProducts

**PUT**: Para actualizar un producto 

cuerpo de la peticion:

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| id  | id de producto  | 6616cf0237e8d08eef5c5d13 | ID del producto, se puede obtener con la funcion GET  |
| name  | String (Opcional)  | Zapatilla 1  | Nuevo nombre del producto  |
| brand  | String (Opcional) | Adidas  | Nuevo nombre de la marca (No importan las mayusculas), esta debe existir en la base de datos  |
| stock  | Numero positivo (Opcional) | 900  | Nueva cantidad del producto, debe ser mayor a 0 para mostrarse |
| price  | Numero positivo (Opcional) | 250000  | Nuevo precio del producto  |
