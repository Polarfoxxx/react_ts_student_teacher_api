
import { useState } from "react"
import "../style/SignIn.style.css"
import apiServicesSignIn from "../../API/SignIn.API"

export type typeSignIn = {
    userName: string,
    password: string
}

function SignIn(): JSX.Element {
    const [signIn, setSignIn] = useState<typeSignIn>({
        userName: "",
        password: ""
    })
    /* vyplnenie formulara pre prihlasenie */
    const handleChangeSignIn = (event: React.FormEvent<HTMLInputElement>): void => {
        type TYPEObjectKey = keyof typeSignIn
        let keyName = event.currentTarget.name as TYPEObjectKey
        signIn[keyName] = event.currentTarget.value
        setSignIn({ ...signIn })

   
    }
    /* odoslanie form. pre prihlasenie */
    const handleLoginButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
        apiServicesSignIn.apiSignIn(signIn)
             /* clear */
             setSignIn({
                userName: "",
                password: ""
            })
    }

    return (
        <div className="SignInBlock">
            <div className="formBox">
                <form
                    className="SignInSubmit"
                    action="submit">
                    <div className="inputUserName">
                        <h4>Username</h4>
                        <input
                            value={signIn.userName}
                            onChange={handleChangeSignIn}
                            name="userName"
                            type="text"
                            placeholder="UserName" />
                    </div>
                    <div className="inputPassword">
                        <h4>Password</h4>
                        <input
                            value={signIn.password}
                            onChange={handleChangeSignIn}
                            name="password"
                            type="text"
                            placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className="buttonBox">
                <button onClick={handleLoginButton}>Login</button>
            </div>
        </div>
    )
}


export default SignIn