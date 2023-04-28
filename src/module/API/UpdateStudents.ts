import axios from "axios"
import { typeUpdateStudents } from "../UpdateStudents/type";

const apiServicesUpdateStudents = {
    apiUpdateStudents
}
export default apiServicesUpdateStudents

async function apiUpdateStudents(JWTToken: string, updateStudents: typeUpdateStudents) {
    console.log(updateStudents);
    /* 
    const options = {
        method: 'PUT',
        url: 'https://tadeasburda.sk/api/teachers{teacherId}/students{id}',
        headers: {
                "Authorization": `Bearer ${JWTToken}`
                'content-type': 'application/json'},
        },
        data: updateStudents
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    } */
}