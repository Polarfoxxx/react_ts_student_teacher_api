
import "../style/ConfirmationResp.style.css"
import { Dispatch, SetStateAction, useEffect } from "react"
import { typeVerification } from "../type"


type props = { // BAD: pouzi PascalCase pre nazvy typov
    verification: typeVerification,
    setVerification: Dispatch<SetStateAction<typeVerification>>
}

function ConfirmationResp({ verification, setVerification }: props): JSX.Element {

    // NOTE: toto by sa dalo napisat asi efektivnejsie
    useEffect(() => {
        const timer = setTimeout(() => {
            setVerification({ success: false, stats: "" })
        }, 5000)
        return (() => clearTimeout(timer))
    }, [verification])


    return (
        <div style={verification.success ? { top: "0px" } : { top: "-200px" }} className="ConfirmationResp">
            <div>
                <h1>{verification.stats}</h1>
            </div>
        </div>
    )
}

export default ConfirmationResp 