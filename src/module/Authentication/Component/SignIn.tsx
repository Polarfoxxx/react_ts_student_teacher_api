
import React from "react"
import { useNavigate } from "react-router-dom"
import { TypeResponseLoginIn } from "../types"
import { api_CRUD_Authentication } from "../../API"
import { TypeSignIn } from "../types"
import "../style/SignIn.style.css"


function SignIn(): JSX.Element {
    let navigate = useNavigate()
    const InputUserNameRefs = React.useRef<HTMLInputElement>(null)
    const InputPasswordRefs = React.useRef<HTMLInputElement>(null)

    /*vyplnenie a odoslanie form. pre prihlasenie */
    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>): void => {
        let signIn: TypeSignIn = {
            userName: "",
            password: ""
        }
        if (InputUserNameRefs.current && InputPasswordRefs.current) {
            signIn = {
                userName: InputUserNameRefs.current.value,
                password: InputPasswordRefs.current.value,
            }
        }
        api_CRUD_Authentication.apiSignIn(signIn)
            .then((data: TypeResponseLoginIn) => {
                if (data.status === 200) {
                    localStorage.setItem("authenticationToken", data.JWTkey);
                    navigate("/Content")
                    /* clear input*/
                    InputUserNameRefs.current!.value = ""
                    InputPasswordRefs.current!.value = ""
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="signInBlock">
            <div className="formBox">
                <div className="signInFroms">
                    <div className="inputUserName">
                        <h4>Username</h4>
                        <input
                            ref={InputUserNameRefs}
                            name="userName"
                            type="text"
                            placeholder="UserName" />
                    </div>
                    <div className="inputPassword">
                        <h4>Password</h4>
                        <input
                            ref={InputPasswordRefs}
                            name="password"
                            type="password"
                            placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className="buttonBox">
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}


export default SignIn