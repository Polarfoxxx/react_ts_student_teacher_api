// GOOD> lepsie formatovanie


import { useState } from "react"
import "../../Sign_In/style/SignIn.style.css"
import { ConfirmationResp } from "../../ConfirmationResp"
import servicesErrorResponze from "../../services/errorResponze"
import apiServicesSignUp from "../../API/SignUp.API"
import { TypeVerification } from "../../ConfirmationResp/type"
import { TypeSignUp } from "../types"

function SignUp(): JSX.Element {
    const [verification, setVerification] = useState<TypeVerification>({
        success: false,
        stats: ""
    })
    const [signUp, setSignUp] = useState<TypeSignUp>({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        phoneNumber: "",
    })

    /* vyplnenie formulara objektu pre registraciu*/
    const handleChangeInpSignUp = (event: React.FormEvent<HTMLInputElement>): void => {
        type TYPEObjectKey = keyof TypeSignUp;
        let nameKey = event.currentTarget.name as TYPEObjectKey
        signUp[nameKey] = event.currentTarget.value
        setSignUp({ ...signUp })
    }
    /* odoslanie registracneho formulara do API*/
    const handleSignUp = (event: React.MouseEvent<HTMLButtonElement>): void => {
        apiServicesSignUp.apiSignUp(signUp)
            .then((data: number) => {
                setVerification({ success: true, stats: servicesErrorResponze.errorResponze(data) }) // BAD: vracia to aj OK kody takze zle pomenovane + nastavujes to ako OK ajked je to error
            })
            .catch(err => console.log(err))

        /* clear */
        setSignUp({
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            phoneNumber: "",
        })
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
                    <div className="inputPassword"> // BAD: zle className, nema to logiku
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
            <div className="buttonBox"> // BAD: zle className, nema to logiku
                <button
                    onClick={handleSignUp}
                >Create
                </button>
            </div>
        </div>
    )
}


export default SignUp