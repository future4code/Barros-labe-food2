import React, { useState } from "react"
import GlobalContext from "../context/GlobalContext"
import useRequestData from "../hooks/useRequestData"
import { BASE_URL } from "../constants/constants"

const GlobalState = ({children}) => {

    const [dataRestaurants, errorRestaurants, isLoadingRestaurants, reload, setReload] = useRequestData(`${BASE_URL}/restaurants`)

    return (
        <GlobalContext.Provider value={{dataRestaurants, errorRestaurants, isLoadingRestaurants}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;