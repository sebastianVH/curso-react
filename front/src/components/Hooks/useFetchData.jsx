import { useState,useEffect } from "react"
import axios from "axios"


function useFetchData(endpoint){

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(response => {
            setData(response.data)
        })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
    },[endpoint])

    return {data,loading,error}
}


export default useFetchData