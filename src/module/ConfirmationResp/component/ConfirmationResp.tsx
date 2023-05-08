
import React from "react"
import { TypeVerification } from "../type"
import "../style/ConfirmationResp.style.css"

type Props = { 
    verification: TypeVerification,
    setVerification: React.Dispatch<React.SetStateAction<TypeVerification>>
}

function ConfirmationResp({ verification, setVerification }: Props): JSX.Element {
    React.useEffect(() => {
        if(verification.statusdisplay) {
            setTimeout(() => {
                setVerification({ 
                    statusdisplay: false, 
                    stats: "" 
                })
            }, 5000)
        }
    }, [verification])
   
    return (
        <div style={verification.statusdisplay ? { top: "0px" } : { top: "-200px" }} className="confirmationResp">
            <div>
                <h1>{verification.stats}</h1>
            </div>
        </div>
    )
}

export default ConfirmationResp 