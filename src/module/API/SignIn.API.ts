import axios from "axios"
import { typeSignIn } from "../Sign_In/Component/SignIn";

const apiServicesSignIn = {
    apiSignIn
}
export default apiServicesSignIn

async function apiSignIn(signInData: typeSignIn) {
console.log(signInData);

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