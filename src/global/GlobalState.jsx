import React from "react"
import GlobalContext from "../context/GlobalContext"

const GlobalState = ({children}) => {
    let oi = 'oi'
    return (
        <GlobalContext.Provider value={oi}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;