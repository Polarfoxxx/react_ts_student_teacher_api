
import { useState, createContext } from "react"
import { TypeContext, Props } from "../types"


const Context = createContext<TypeContext>({
    logOut: false,
    setLogOut: () => { }
})

function Provider({ children }: Props): JSX.Element {
    const [logOut, setLogOut] = useState<boolean>(false)

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