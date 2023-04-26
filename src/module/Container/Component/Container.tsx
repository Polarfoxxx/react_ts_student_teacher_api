
import { useState, createContext, Dispatch, SetStateAction } from "react"

type Props = {
    children: JSX.Element | JSX.Element[] 
}

type typeContext = {
    logOut: boolean,
    setLogOut:  Dispatch<SetStateAction<boolean>>,
}

const Context = createContext<typeContext>({
    logOut: false,
    setLogOut: ()=>{}
})

function Provider({children} : Props): JSX.Element {
    const [ logOut, setLogOut ] = useState<boolean>(false)

    return(
        <div className="Container">
            <Context.Provider value={{logOut , setLogOut}}>
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