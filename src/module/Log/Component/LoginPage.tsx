import { SignIn } from "../../Sign_In"
import { SignUp } from "../../Sign_Up"
import "../style/LoginPage.style.css"

function LoginPage(): JSX.Element {

        return (
                <div className="LoginPage">
                        <div className="loginPageContext">
                                <div className="signInComponent">
                                        <div className="signHeader SignIN">
                                                <h1>Sign In</h1>
                                        </div>
                                        <div className="signFormBox">
                                                <SignIn />
                                        </div>
                                </div>
                                <div className="signUpComponent">
                                        <div className="signHeader">
                                                <h1>Sign Up</h1>
                                        </div>
                                        <div className="signFormBox">
                                                <SignUp />

                                        </div>
                                </div>

                        </div>

                </div>
        )
}


export default LoginPage