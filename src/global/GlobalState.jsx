import React, { useState } from "react"
import GlobalContext from "../context/GlobalContext"
import useRequestData from "../hooks/useRequestData"
import { BASE_URL } from "../constants/constants"

const GlobalState = ({children}) => {

    const [dataRestaurants, errorRestaurants, isLoadingRestaurants] = useRequestData(`${BASE_URL}/restaurants`)
    const [reload, setReload]=useState(false);

    return (
        <GlobalContext.Provider value={{dataRestaurants, errorRestaurants, isLoadingRestaurants, reload, setReload}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;