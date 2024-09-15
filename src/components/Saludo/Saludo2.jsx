

function Saludo2({nombre,curso,funcion,Componente}){

    //DESESTRUCTURE el objeto props y directamente ACCEDO a las propiedades que le pasamos al componente

    const numero1 = 2
    const numero2 = 6
    const numero3 = 8

    const suma_total = funcion(numero1,numero2,numero3)
    const saludo = `Hola ${nombre}, bienvenido/a al Curso de ${curso}`

    return (
        <>
            <h1>{saludo}</h1>
            <h2>La suma del numero {numero1}, {numero2} y {numero3} es {suma_total} </h2>
            <Componente/>
        </>
    )

}

export default Saludo2