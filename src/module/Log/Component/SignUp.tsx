
import React from "react"
import "../style/SignUp.style.css"
import { ConfirmationResp } from "../../ConfirmationResp"
import servicesStatusResponze from "../../services/statusResponze"
import apiServicesSignUp from "../../API/SignUp.API"
import { TypeVerification } from "../../ConfirmationResp/type"
import { TypeSignUp } from "../types"

function SignUp(): JSX.Element {
    const InputsFirstNameRefs = React.useRef<HTMLInputElement>(null)
    const InputsLastNameRefs = React.useRef<HTMLInputElement>(null)
    const InputsUserNameRefs = React.useRef<HTMLInputElement>(null)
    const InputsEmailRefs = React.useRef<HTMLInputElement>(null)
    const InputsPasswordRefs = React.useRef<HTMLInputElement>(null)
    const InputsPhoneRefs = React.useRef<HTMLInputElement>(null)

    const [verification, setVerification] = React.useState<TypeVerification>({
        statusdisplay: false,
        stats: ""
    })

    /* odoslanie registracneho formulara do API*/
    const handleSignUp = (event: React.MouseEvent<HTMLButtonElement>): void => {
        let signUp: TypeSignUp = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            phoneNumber: "",
        }
        if (InputsFirstNameRefs.current && InputsLastNameRefs.current && InputsUserNameRefs.current && InputsEmailRefs.current && InputsPasswordRefs.current && InputsPhoneRefs.current) {
            signUp = {
                firstName: InputsFirstNameRefs.current.value,
                lastName: InputsLastNameRefs.current.value,
                userName: InputsUserNameRefs.current.value,
                password: InputsEmailRefs.current.value,
                email: InputsPasswordRefs.current.value,
                phoneNumber: InputsPhoneRefs.current.value,
            }
        }
        apiServicesSignUp.apiSignUp(signUp)
            .then((data: number) => {
                if (data === 200) {
                    setVerification({
                        statusdisplay: true,
                        stats: servicesStatusResponze.statusResponze(data)
                    })
                    /* clear input*/
                    InputsFirstNameRefs.current!.value = ""
                    InputsLastNameRefs.current!.value = ""
                    InputsUserNameRefs.current!.value = ""
                    InputsEmailRefs.current!.value = ""
                    InputsPasswordRefs.current!.value = ""
                    InputsPhoneRefs.current!.value = ""
                } else {
                    setVerification({
                        statusdisplay: true,
                        stats: servicesStatusResponze.statusResponze(data)
                    })
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="signUpBlock">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification} />    {/* overenie uspenej registracie */}
            <div className="formBox">
                <div className="SignInForm" >
                    <div className="inputFirstName">
                        <h4>First name</h4>
                        <input
                            ref={InputsFirstNameRefs}
                            name="firstName"
                            type="text"
                            placeholder="First name" />
                    </div>
                    <div className="inputLastName">
                        <h4>Last name</h4>
                        <input
                            ref={InputsLastNameRefs}
                            name="lastName"
                            type="text"
                            placeholder="Last name" />
                    </div>
                    <div className="inputUserName">
                        <h4>Username</h4>
                        <input
                            name="userName"
                            ref={InputsUserNameRefs}
                            type="text"
                            placeholder="Username" />
                    </div>
                    <div className="inputEmail">
                        <h4>Email</h4>
                        <input
                            name="email"
                            ref={InputsEmailRefs}
                            type="text"
                            placeholder="Email" />
                    </div>
                    <div className="inputPassword">
                        <h4>Password</h4>
                        <input
                            name="password"
                            ref={InputsPasswordRefs}
                            type="text"
                            placeholder="Password" />
                    </div>
                    <div className="inputPhoneNumber">
                        <h4>Phone number</h4>
                        <input
                            name="phoneNumber"
                            ref={InputsPhoneRefs}
                            type="text"
                            placeholder="Phone number" />
                    </div>
                </div>
            </div>
            <div className="buttonBox">
                <button
                    onClick={handleSignUp}>
                    Create
                </button>
            </div>
        </div>
    )
}


export default SignUp