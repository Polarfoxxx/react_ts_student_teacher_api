
import { useState } from "react"
import "../../Sign_In/style/SignIn.style.css"
import { ConfirmationResp } from "../../ConfirmationResp"

import apiServicesSignUp from "../../API/SignUp.API"
import { typeVerification } from "../../ConfirmationResp/type"
import { typeSignUp } from "../types"

function SignUp(): JSX.Element {
    const [verification, setVerification] = useState<typeVerification>({
        success: false,
        stats: false
    })
    const [signUp, setSignUp] = useState<typeSignUp>({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        phoneNumber: "",
    })

    /* vyplnenie formulara objektu pre registraciu*/
    const handleChangeInpSignUp = (event: React.FormEvent<HTMLInputElement>): void => {
        type TYPEObjectKey = keyof typeSignUp;
        let nameKey = event.currentTarget.name as TYPEObjectKey
        signUp[nameKey] = event.currentTarget.value
        setSignUp({ ...signUp })
    }
    /* odoslanie registracneho formulara */
    const handleSignUp = (event: React.MouseEvent<HTMLButtonElement>): void => {
        apiServicesSignUp.apiSignUp(signUp)
            .then(data => {
                console.log(data)
                setVerification({
                    success: false,
                    stats: false
                })
            })
            .catch(err => console.log(err))

        /* clear */
    /*     setSignUp({
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            phoneNumber: "",
        }) */
    }

    return (
        <div className="SignInBlock">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification} />    {/* overenie uspenej registracie */}
            <div className="formBox">
                <form
                    className="SignInSubmit"
                    action="submit">
                    <div className="inputUserName">
                        <h4>First name</h4>
                        <input
                            value={signUp.firstName}
                            onChange={handleChangeInpSignUp}
                            name="firstName"
                            type="text"
                            placeholder="First name" />
                    </div>
                    <div className="inputPassword">
                        <h4>Last name</h4>
                        <input
                            value={signUp.lastName}
                            onChange={handleChangeInpSignUp}
                            name="lastName"
                            type="text"
                            placeholder="Last name" />
                    </div>
                    <div className="inputPassword">
                        <h4>Username</h4>
                        <input
                            value={signUp.userName}
                            onChange={handleChangeInpSignUp}
                            name="userName"
                            type="text"
                            placeholder="Username" />
                    </div>
                    <div className="inputPassword">
                        <h4>Email</h4>
                        <input
                            value={signUp.email}
                            onChange={handleChangeInpSignUp}
                            name="email"
                            type="text"
                            placeholder="Email" />
                    </div>
                    <div className="inputPassword">
                        <h4>Password</h4>
                        <input
                            value={signUp.password}
                            onChange={handleChangeInpSignUp}
                            name="password"
                            type="text"
                            placeholder="Password" />
                    </div>
                    <div className="inputPassword">
                        <h4>Phone number</h4>
                        <input
                            value={signUp.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChangeInpSignUp}
                            type="text"
                            placeholder="Phone number" />
                    </div>
                </form>
            </div>
            <div className="buttonBox">
                <button
                    onClick={handleSignUp}
                >Create
                </button>
            </div>
        </div>
    )
}


export default SignUp