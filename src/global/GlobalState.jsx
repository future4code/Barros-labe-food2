import React, { useState } from "react"
import GlobalContext from "../context/GlobalContext"
import useRequestData from "../hooks/useRequestData"
import { BASE_URL } from "../constants/constants"

const GlobalState = ({children}) => {

    const [dataRestaurants, errorRestaurants, isLoadingRestaurants, reload, setReload] = useRequestData(`${BASE_URL}/restaurants`)
    const [showOrder, setShowOrder] = useState(localStorage.getItem("orderInProgress"))

    return (
        <GlobalContext.Provider value={{dataRestaurants, errorRestaurants, isLoadingRestaurants, showOrder, setShowOrder}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;