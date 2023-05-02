import axios from "axios"
import { TypeSignIn } from "../Sign_In/types"

const apiServicesSignIn = {
    apiSignIn
}
export default apiServicesSignIn

async function apiSignIn(signInData: TypeSignIn): Promise<string | undefined> {
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