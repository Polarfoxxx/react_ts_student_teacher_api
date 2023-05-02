import axios from "axios"
import { TypeResponzeALLTechers } from "./types"

const apiServicesAllTeacher = {
    apiAllTeacher
}
export default apiServicesAllTeacher

async function apiAllTeacher(JWTToken: string): Promise<TypeResponzeALLTechers> {
    let responzeALLtecherDATA: TypeResponzeALLTechers = [{ id: "", name: "", subject: "" }]
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
        responzeALLtecherDATA = response.data;
    } catch (error) {
        console.error(error);
    }
    return (
        responzeALLtecherDATA
    )
}