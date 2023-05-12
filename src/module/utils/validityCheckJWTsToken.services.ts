import jwt_decode from "jwt-decode";
import { TypeJWTsToken } from "./types";

function servicesValidityCheckJWTsToken(JWTToken: string): boolean {
    
    let checkVerification = false
    let JWTdecode: TypeJWTsToken = jwt_decode(JWTToken);
    let date = Math.floor(Date.now() / 1000);

    if (date < JWTdecode.exp) {
        checkVerification = true
    } else { checkVerification = false }

    return (
        checkVerification
    )
}

export default servicesValidityCheckJWTsToken