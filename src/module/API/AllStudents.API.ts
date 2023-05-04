import axios from "axios"
import { TypeALLStudents } from "../Student.module/type";

const apiServicesAllStudents = {
    apiAllStudents
}
export default apiServicesAllStudents

async function apiAllStudents(JWTToken: string, allStudents: TypeALLStudents) {
    const options = {
        method: 'GET',
        url: `https://tadeasburda.sk/api/teachers/${allStudents.teacherId}/students`,
        headers: {
            "Authorization": `Bearer ${JWTToken}`,
            'content-type': 'application/json'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}