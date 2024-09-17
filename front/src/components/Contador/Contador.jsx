import {useState,useEffect} from "react"


function Contador(){
    const [contador,setContador] = useState(0)


   useEffect(()=>{
    console.log("Componente montado");
        const intervalo = setInterval(()=>{
            setContador(contador => contador+1)
        },1000)
        //limpieza del componente al momento de desmontarse
        return () => {
            console.log("Componente desmontado");
            clearInterval(intervalo)
        }
   },[])

    return(
        <>
            <h1>Contador: {contador}</h1>
        </>
    )

}

export default Contador