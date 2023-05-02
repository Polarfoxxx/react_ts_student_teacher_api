import jwt_decode from "jwt-decode";


function validityCheckJWTsToken(JWTToken: string) {
    var JWTdecode = jwt_decode(JWTToken);
    console.log(JWTdecode);
    
}


export default validityCheckJWTsToken