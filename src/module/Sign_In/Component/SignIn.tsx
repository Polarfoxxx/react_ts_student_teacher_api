
import { useState } from "react"
import "../style/SignIn.style.css"


function SignIn(): JSX.Element {


    return (
        <div className="SignInBlock">
            <div className="formBox">
                <form
                    className="SignInSubmit"
                    action="submit">
                    <div className="inputUserName">
                        <h4>UserName</h4>
                        <input
                            type="text" 
                            placeholder="UserName"/>
                    </div>
                    <div className="inputPassword">
                        <h4>Password</h4>
                        <input
                            type="text"
                            placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className="buttonBox">
                <button>Login</button>
            </div>
        </div>
    )
}


export default SignIn