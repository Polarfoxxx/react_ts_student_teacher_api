
import React from "react"
import { SignIn, SignUp } from "../"
import { LoginPageHeader } from "../"
import "../style/LoginPage.style.css"

function LoginPage(): JSX.Element {
  const elementSignIn = React.useRef<HTMLDivElement>(null)
  const elementSignUp = React.useRef<HTMLDivElement>(null)
  const [respoEffect, setRespoEffect] = React.useState(false)

  const handleClickRespoStatusEffect = (event: React.MouseEvent<HTMLDivElement>): void => {
    setRespoEffect(elementSignIn.current === event.currentTarget)
  }


  return (
    <div className="loginPage">
      <div className="logPageHeader">
        <LoginPageHeader />
      </div>
      <div className="loginPageContext">
        <div
          style={respoEffect ? { height: "600px" } : { height: "0px" }}
          ref={elementSignIn}
          onClick={handleClickRespoStatusEffect}
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
          style={!respoEffect ? { height: "600px" } : { height: "0px" }}
          ref={elementSignUp}
          onClick={handleClickRespoStatusEffect}
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