
# Backend para tienda de zapatos

## ¿Como lanzar el proyecto?

1). Descarga el repositorio

2). Instala las dependencias con npm init

3). Crea un .env tomando como ejemplo el archivo .env.example

4). Crea una base de datos en mongoose con 3 colecciones (brands,products y users)

5). Ya puedes iniciar con

``node ./src/index.js``

## API DOC

* Los cuerpos de peticion deben estar en JSON un ejemplo seria:

    {

    "name":"Zapatillas 2",

    "brand":"Adidas",

    "stock":9900,

    "price":100

    }

<details>
<summary> Productos </summary>

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

</details>


<details>
<summary> Marcas </summary>

para el manejo de las marcas hacemos peticiones a la ruta http://localhost:3000/brands

**GET**: Para obtener a todos las marcas (No es necesario ningun parametro)

**PUT**: Para crear una nueva marcas

cuerpo de la peticion:

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| name  | String  | Ardidas  | Nombre de la marca  |


**DELETE**: Para eliminar una marca

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| id  | id de la marca  | 6616cf0237e8d08eef5c5d13 | ID de la marca, se puede obtener con la funcion GET  |


</details>

<details>
<summary> Usuarios </summary>

para el manejo de las usuarios hacemos peticiones a la ruta http://localhost:3000/users

**GET**: Para obtener a todos los usuarios (No es necesario ningun parametro)

**PUT**: Para crear un nuevo usuario

cuerpo de la peticion:

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| name  | String  | santiago Valderrama  | Nombre del usuario  |
| email  | String (email)  | savalderrama@unal.edu.co  | Email del usuario  |


**DELETE**: Para eliminar un usuario

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| id  | id del usuario  | 6616cf0237e8d08eef5c5d13 | ID del usuario, se puede obtener con la funcion GET  |


</details>

<details>
<summary> descuentos </summary>

para el manejo de los descuentos hacemos peticiones a la ruta http://localhost:3000/discounts

**GET**: Para obtener todos los descuentos de un usuario 

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| email  | String (email)  | savalderrama@unal.edu.co  | Email del usuario  |

**PUT**: Para crear un nuevo descuento o actualizar a un usuario sobre una marca

cuerpo de la peticion:

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |

| email  | String (email)  | savalderrama@unal.edu.co  | Email del usuario  |
| id  | Id de la marca  | 6616cf0237e8d08eef5c5d13  | ID de la marca a aplicar el descuento  |
| discount  | Numero entre 0 y 100  | 12  | % de descuento que va a tener el usuario sobre la marca  |

**DELETE**: Para eliminar un descuento

| Nombre  | Tipo | Ejemplo | Descripcion |
| ------------- | ------------- | ------------- |------------- |
| email  | email del usuario  | savalderrama@unal.edu.co | Email del usuario  |
| id  | id de la marca  | 6616cf0237e8d08eef5c5d13 | ID de la marca a aplicar el descuento |


</details>

<details>
<summary> precios </summary>

para obtener los precios a un producto hacemos peticiones a la ruta http://localhost:3000/prices/{id_del_usuario}/{nombre_del_producto}

**GET**: Obtiene el precio para un producto aplicando descuentos del cliente

ejemplo:

    localhost:3000/prices/6616d09b894f0d0f80c51d28/Zapatillas 1

</details>