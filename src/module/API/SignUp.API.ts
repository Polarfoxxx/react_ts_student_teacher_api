import axios from "axios"
import { typeSignUp } from "../Sign_Up/types";

const apiServicesSignUp = {
    apiSignUp
}
export default apiServicesSignUp

async function apiSignUp(signUpData: typeSignUp) {
console.log(signUpData);

   /*  const options = {
        method: 'POST',
        url: 'https://tadeasburda.sk/api/userauthentication',
        headers: {
            'content-type': 'application/json'},
        data: signUpData
    };

    try {
        const response = await axios.request(options);
        console.log(response);
    } catch (error) {
        console.error(error);
    }  */
}