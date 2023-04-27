
import "../style/ConfirmationResp.style.css"
import { Dispatch, SetStateAction, useEffect } from "react"
import { typeVerification } from "../../Sign_Up/Component/SignUp"


type props = {
    verification: typeVerification,
    setVerification: Dispatch<SetStateAction<typeVerification>>
}

function ConfirmationResp({ verification, setVerification }: props): JSX.Element {


    useEffect(() => {
       const timer =  setTimeout(() => {
            setVerification({success : false, stats: false})
        }, 3000)
        return(() => clearTimeout(timer))
    }, [verification])
    


    if (!verification.success) {
        return (
            <div className="ConfirmationResp">
            </div>
        )
    }

    return (
        <div className="ConfirmationResp">
            {
                verification.stats ? <div>
                    <h1>Succesful</h1>
                </div> :
                    <div>
                        <h1>False</h1>
                    </div>
            }

        </div>
    )
}

export default ConfirmationResp 