import React, { useState } from "react"
import GlobalContext from "../context/GlobalContext"
import useRequestData from "../hooks/useRequestData"
import { BASE_URL } from "../constants/constants"

const GlobalState = ({children}) => {

    const [dataRestaurants, errorRestaurants, isLoadingRestaurants, reload, setReload] = useRequestData(`${BASE_URL}/restaurants`)
    const [arrayProducts, setArrayProducts] = useState([]);



    return (
        <GlobalContext.Provider value={{dataRestaurants, errorRestaurants, isLoadingRestaurants, arrayProducts, setArrayProducts}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;