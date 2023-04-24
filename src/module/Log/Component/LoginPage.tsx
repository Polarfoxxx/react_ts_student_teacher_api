import { SignIn } from "../../Sign_In"
import { SignUp } from "../../Sign_Up"

function LoginPage(): JSX.Element {
    return (
        <div className="LoginPage">
                <div className="signInComponent">
                        <SignIn/>
                </div>
                <div className="signUpComponent">
                        <SignUp/>
                </div>
        </div>
    )
}


export default LoginPage