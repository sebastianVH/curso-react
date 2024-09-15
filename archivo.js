const productos = [
    {
        id: 1,
        nombre: "Monitor",
        precio: 200
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 100
    },
    {
        id: 3,
        nombre: "Mouse",
        precio: 50
    }
]

//para crear un almacenamiento local, en el cual vamos a almacenar nuestros productos

localStorage.setItem("productos",JSON.stringify(productos))

//para leer del almacenamiento local, voy a usar el metodo getItem

JSON.parse(localStorage.getItem("productos"))