
import { SignIn } from "../../Sign_In"
import { SignUp } from "../../Sign_Up"
import "../style/LoginPage.style.css"
import React from "react"

function LoginPage(): JSX.Element {
  const elementSignIn = React.useRef<HTMLDivElement>(null)
  const elementSignUp = React.useRef<HTMLDivElement>(null)
  const [respoEffect, setRespoEffect] = React.useState(false)

  const handleClickRespoStatusEffect = (event: React.MouseEvent<HTMLDivElement>): void => {
  const signInElementname = elementSignIn.current?.className
  console.log(signInElementname);
  console.log( elementSignIn.current);
  
  signInElementname === "signInComponent" ? setRespoEffect(true) : setRespoEffect(false)
  }

  return (
    <div className="LoginPage"> // BAD: raz mas className vekim, potom malym pismenom... bud konzistetny
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