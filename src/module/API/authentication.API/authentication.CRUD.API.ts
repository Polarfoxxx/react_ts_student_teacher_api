import axios from "axios"
import { TypeSignIn } from "../../Authentication/types"
import { TypeResponseLoginIn } from "../../Authentication/types"
import { TypeSignUp } from "../../Authentication/types"

const  api_CRUD_Authentication = {
    apiSignIn,
    apiSignUp
}
export default  api_CRUD_Authentication

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



async function apiSignUp(signUpData: TypeSignUp): Promise<number> {
    
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