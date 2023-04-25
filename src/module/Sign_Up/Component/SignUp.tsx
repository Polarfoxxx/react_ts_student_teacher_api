
import { useState } from "react"
import "../../Sign_In/style/SignIn.style.css"


function SignUp(): JSX.Element {
    return (
        <div className="SignInBlock">
            <div className="formBox">
                <form
                    className="SignInSubmit"
                    action="submit">
                    <div className="inputUserName">
                        <h4>firstName</h4>
                        <input
                            type="text"
                            placeholder="firstName" />
                    </div>
                    <div className="inputPassword">
                        <h4>lastName</h4>
                        <input
                            type="text"
                            placeholder="lastName" />
                    </div>
                    <div className="inputPassword">
                        <h4>userName</h4>
                        <input
                            type="text"
                            placeholder="userName" />
                    </div>
                    <div className="inputPassword">
                        <h4>email</h4>
                        <input
                            type="text"
                            placeholder="email" />
                    </div>
                    <div className="inputPassword">
                        <h4>phoneNumber</h4>
                        <input
                            type="text"
                            placeholder="phoneNumber" />
                    </div>
                </form>
            </div>
            <div className="buttonBox">
                <button>Login</button>
            </div>
        </div>
    )
}


export default SignUp