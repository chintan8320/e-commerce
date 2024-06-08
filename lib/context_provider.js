'use client'

import { jwtDecode } from "jwt-decode"
import { createContext } from "react"

const UserContext = createContext()

const ContextProvider = ({children}) => {
    const token = global.localStorage?.getItem('token')
    const decoded = token ? jwtDecode(token).user.id : ''
    return(
        <UserContext.Provider value={decoded}>{children}</UserContext.Provider>
    )
}

export { UserContext, ContextProvider };