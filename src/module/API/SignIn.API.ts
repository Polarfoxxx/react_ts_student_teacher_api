import axios from "axios"
import { TypeSignIn } from "../Log/types"
import { TypeResponseLoginIn } from "../Log/types"

const apiServicesSignIn = {
    apiSignIn
}
export default apiServicesSignIn

async function apiSignIn(signInData: TypeSignIn): Promise<TypeResponseLoginIn> {
    let responseLoginIn: TypeResponseLoginIn = {
        JWTkey: "",
        status: 0
    }
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
        responseLoginIn = {
            JWTkey: response.data.token,
            status: response.status
        }
    } catch (error) {
        console.error(error);
    }
    return (
        responseLoginIn
    )
}