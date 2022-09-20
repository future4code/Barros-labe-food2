import axios from "axios"
import { useEffect, useState } from "react"
import { token } from "../constants/constants"

const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [reload, setReload] = useState(undefined)

    useEffect(()=>{        
        setIsLoading(true)
        axios.get(url, { 
        headers: {
            auth: token
        }})
        .then((response)=>{
            setIsLoading(false)
            console.log(response.data)
            setData(response.data)
        })
        .catch((er)=>{
            setIsLoading(false)
            setError(er.response.data.message)
        })
    }, [reload])

    return [data, error, isLoading, reload, setReload]
}

export default useRequestData;