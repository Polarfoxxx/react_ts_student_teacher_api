import axios from "axios"

const apiServicesValidityAuthen = {
    apiValidityAuthen
}
export default apiServicesValidityAuthen

async function apiValidityAuthen(JWTToken: string): Promise<number> {
    let authStatus: number = 0 

       const options = {
        method: 'GET',
        url: 'https://tadeasburda.sk/api/teachers',
        headers: {
             "Authorization": `Bearer ${JWTToken}`,
            'content-type': 'application/json'}
    };

    try {
        const response = await axios.request(options);
        authStatus = response.status;
    } catch (error) {
        console.error(error);
    }  
    return(
        authStatus
    )
}