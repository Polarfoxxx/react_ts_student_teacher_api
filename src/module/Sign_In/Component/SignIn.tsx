
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../style/SignIn.style.css"
import apiServicesSignIn from "../../API/SignIn.API"
import { TypeSignIn } from "../types"

function SignIn(): JSX.Element {
    let navigate = useNavigate()
    const [signIn, setSignIn] = useState<TypeSignIn>({ // BAD: pouzi ref, neukladaj do state formularove data, ak nepotrabujes kontrolovat vzdy zmenu
        userName: "",
        password: ""
    })
    /* vyplnenie formulara pre prihlasenie */
    const handleChangeSignIn = (event: React.FormEvent<HTMLInputElement>): void => {
        type TYPEObjectKey = keyof TypeSignIn
        let keyName = event.currentTarget.name as TYPEObjectKey
      signIn[keyName] = event.currentTarget.value // BAD: pouzi setSignIn, nemen state priamo!!!
      setSignIn({ ...signIn, [keyName]: event.currentTarget.value })

    }
    /* odoslanie form. pre prihlasenie */
    const handleLoginButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
        apiServicesSignIn.apiSignIn(signIn)
            .then((data: string | undefined) => {
                if (data) {
                    localStorage.setItem("authenticationToken", data);
                    navigate("/Content") /* poslanie na predchazdajucu localitu */ // BAD: pouzi navigate(-1) alebo implementurj returnUrl, takto to neni na predchadzajucu ale na Context
                } else { localStorage.removeItem("authenticationToken") } // BAD: preco clear localStorage ak sa nepodari prihlasit? zmaz len klucm nie celi storage
            }
            )
            .catch(err => console.error(err)) 

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
                    action="submit"> // BAD: nepouzivaj action="submit" na formulari, pouzi onSubmit={}
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
                            type="password"
                            placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className="buttonBox">
                <button onClick={handleLoginButton}>Login</button> // BAD: nepouzivaj onClick na button, pouzi type="submit" na formulari
            </div>
        </div>
    )
}


export default SignIn