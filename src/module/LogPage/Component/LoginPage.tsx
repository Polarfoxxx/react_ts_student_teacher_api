
import { useState } from "react"

type Props = {
    children: JSX.Element | JSX.Element[]
}

function LoginPage({children} : Props): JSX.Element {
    return(
        <div className="Container">
            {children}
        </div>
    )
}


 export default LoginPage