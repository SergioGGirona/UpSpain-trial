# Prueba técnica frontend

Utilizando Angular y la siguiente API pública https://rickandmortyapi.com/, se pidió completar los siguientes pasos (independientemente del orden).

## 2. Llamar a la API y mmostrar los personajes (characters) en pantalla (utilizando la maquetación que más guste).

En este caso, tenemos un store a través del cual el componente cards hace una petición GET a la API. Al cargar a los personajes, este los 'distribuye' con un bucle for a su hijo, Cards.

Como la API está paginada, he utilizado en vez de usar botones he utilizado una librería para que cada vez que se llegue al final de la página haga una nueva carga de personajes.

## 2. Permitir editar los personajes.

Para ello, se abre en un popup (no alert) un formulario de edición para los campos de nombre (name), ubicación (location) y estado (status). Estos cambios se guardan localmente hasta que se recarga la página (ya que no se puede hacer PUT/PATCH sobre la API).

## 3.Crear una tabla resumen de los 10 primeros personajes (solo los datos principales, sin imagen).

Se vuelve a hacer un GET a través del store y se ejecuta el método slice para quedarnos con los 10 primeros.
