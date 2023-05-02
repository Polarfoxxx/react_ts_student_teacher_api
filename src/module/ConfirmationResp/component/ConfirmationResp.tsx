
import "../style/ConfirmationResp.style.css"
import { Dispatch, SetStateAction, useEffect } from "react"
import { TypeVerification } from "../type"

type Props = { 
    verification: TypeVerification,
    setVerification: Dispatch<SetStateAction<TypeVerification>>
}

function ConfirmationResp({ verification, setVerification }: Props): JSX.Element {

    useEffect(() => {
        if(verification.success) {
            setTimeout(() => {
                setVerification({ success: false, stats: "" })
            }, 5000)
        }
    }, [verification])
   
      


    return (
        <div style={verification.success ? { top: "0px" } : { top: "-200px" }} className="confirmationResp">
            <div>
                <h1>{verification.stats}</h1>
            </div>
        </div>
    )
}

export default ConfirmationResp 