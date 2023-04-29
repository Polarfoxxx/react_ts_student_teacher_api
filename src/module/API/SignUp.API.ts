import axios from "axios"
import { typeSignUp } from "../Sign_Up/types";

const apiServicesSignUp = {
    apiSignUp
}
export default apiServicesSignUp

async function apiSignUp(signUpData: typeSignUp): Promise<number> {
console.log(signUpData);
let responseSignUpData : number = 0

 const options = {
        method: 'POST',
        url: 'https://tadeasburda.sk/api/userauthentication',
        headers: {
            'content-type': 'application/json'},
        data: signUpData
    };

    try {
        const response = await axios.request(options);
        responseSignUpData = response.status 
    } catch (error) {
        console.error(error);
    }   
    return(
        responseSignUpData
    )
}