import axios from "axios"

const apiServicesValidityAuthen = {
    apiValidityAuthen
}
export default apiServicesValidityAuthen

// BAD: cele zle...mas rozblit token a pozriet jeho expiraciu, nie volat na api a skusit ci mas odpoved 200
// lebo ak ti treaz pride 200 tak to este neznamena ze je token validny, moze byt expired pri dalsom volani a takto to nezistis
async function apiValidityAuthen(JWTToken: string): Promise<number> {
    let authStatus: number = 0
    const options = {
        method: 'GET',
        url: 'https://tadeasburda.sk/api/teachers',
        headers: {
            "Authorization": `Bearer ${JWTToken}`,
            'content-type': 'application/json'
        }
    };
    try {
        const response = await axios.request(options);
        authStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    return (
        authStatus
    )
}