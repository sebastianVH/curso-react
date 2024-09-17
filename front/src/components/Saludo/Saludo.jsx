



function Saludo(props){

    //Las props llegan como un OBJETO de Js: props: {nombre: 'Sebastian',curso: "React",funcion: sumar}

    const numero1 = 6
    const numero2 = 9
    const numero3 = 10

    const suma_total = props.funcion(numero1,numero2,numero3)
    const saludo = `Hola ${props.nombre}, bienvenido/a al Curso de ${props.curso}`

    return (
        <>
            <h1>{saludo}</h1>
            <h2>La suma del numero {numero1}, {numero2} y {numero3} es {suma_total} </h2>
            <props.Componente/>
        </>
    )

}

export default Saludo