
import React from "react"
import { TypeContext, Props } from "../types"

const Context = React.createContext<TypeContext>({
    logOut: false,
    setLogOut: () => { }
})

function Provider({ children }: Props): JSX.Element {
    const [logOut, setLogOut] = React.useState<boolean>(false)

    return (
        <div className="Container">
            <Context.Provider value={{ logOut, setLogOut }}>
                {children}
            </Context.Provider>
        </div>
    )
}

const Container = {
    Provider,
    Context
}
export default Container