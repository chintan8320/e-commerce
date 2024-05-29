'use client'

import { jwtDecode } from "jwt-decode"
import { createContext } from "react"

const UserContext = createContext()

const ContextProvider = ({children}) => {
    const decoded = jwtDecode(localStorage.getItem('token'))
    return(
        <UserContext.Provider value={decoded.user.id}>{children}</UserContext.Provider>
    )
}

export { UserContext, ContextProvider };