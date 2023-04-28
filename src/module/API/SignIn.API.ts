import axios from "axios"
import { typeSignIn } from "../Sign_In/Component/SignIn";

const apiServicesSignIn = {
    apiSignIn
}
export default apiServicesSignIn

async function apiSignIn(signInData: typeSignIn): Promise<string | undefined> {
    console.log(signInData);
    let JWTkey: string = ""

    const options = {
        method: 'POST',
        url: 'https://tadeasburda.sk/api/userauthentication/login',
        headers: {
            'content-type': 'application/json'
        },
        data: signInData
    };
    try {
        const response = await axios.request(options);
        JWTkey = response.data.token;
    } catch (error) {
        console.error(error);
    }
    return (
        JWTkey
    )
}