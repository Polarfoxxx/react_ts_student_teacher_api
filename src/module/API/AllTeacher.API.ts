import axios from "axios"
import { typeResponzeALLTechers } from "./types"

const apiServicesAllTeacher = {
    apiAllTeacher
}
export default apiServicesAllTeacher



async function apiAllTeacher(JWTToken: string): Promise<typeResponzeALLTechers> {
    let responzeALLtecherDATA: typeResponzeALLTechers = [{id: "", name: "",subject: ""}]

    const options = {
        method: 'GET',
        url: 'https://tadeasburda.sk/api/teachers',
        headers: {
             "Authorization": `Bearer ${JWTToken}`,
            'content-type': 'application/json'}
    };
    try {
        const response = await axios.request(options);
      responzeALLtecherDATA = response.data;
    } catch (error) {
        console.error(error);
    }  
    return(
        responzeALLtecherDATA
    )
}