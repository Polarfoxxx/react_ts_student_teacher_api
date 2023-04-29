import { SignIn } from "../../Sign_In"
import { SignUp } from "../../Sign_Up"
import "../style/LoginPage.style.css"
import React from "react"

function LoginPage(): JSX.Element {
        const [effect, setEffect] = React.useState(false)
        const effRefs = React.useRef<HTMLDivElement>(null)


        const handleClickEffect = (event: React.MouseEvent<HTMLDivElement>): void => {
                console.log(event.currentTarget.className);

                const nameEvent = event.currentTarget.className
                if (nameEvent === "signInComponent") {
                        setEffect(true)
                } else if (nameEvent === "signUpComponent") {
                        setEffect(false)
                }
        }


        return (
                <div className="LoginPage">
                        <div className="logPageHeader">
                                <span>
                                        <span className="firstPsW">W</span>
                                        <span className="lastePs">elcome</span>
                                </span>
                                <span>
                                        <span className="firstPs">t</span>
                                        <span className="lastePs">o</span>
                                </span>
                                <span>
                                        <span className="firstPs">t</span>
                                        <span className="lastePs">eacher</span>
                                </span>
                                <span>
                                        <span className="firstPs">a</span>
                                        <span className="lastePs">nd</span>
                                </span>
                                <span>

                                        <span className="firstPs">s</span>
                                        <span className="lastePs">tudents</span>
                                </span>
                                <span>
                                        <span className="firstPs">d</span>
                                        <span className="lastePs">atabaze</span>
                                </span>

                        </div>
                        <div className="loginPageContext">
                                <div
                                        style={effect ? { height: "600px" } : { height: "0px" }}
                                        ref={effRefs}
                                        onClick={handleClickEffect}

                                        className="signInComponent">
                                        <div
                                                className="signHeader SignIN">
                                                <h1>Sign In</h1>
                                        </div>
                                        <div className="signFormBox">
                                                <SignIn />
                                        </div>
                                </div>
                                <div
                                        style={!effect ? { height: "600px" } : { height: "0px" }}
                                        ref={effRefs}
                                        onClick={handleClickEffect}
                                        className="signUpComponent">
                                        <div
                                                className="signHeader">
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