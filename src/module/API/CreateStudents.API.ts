
import axios from "axios"
import { typeCreateStudents } from "../CreateStudents/types";

const apiServicesCreateStudents = {
    apiCreateStudents
}
export default apiServicesCreateStudents


async function apiCreateStudents(JWTToken: string, newStudents: typeCreateStudents) {
    console.log(newStudents);

    /* 
        const options = {
            method: 'POST',
            url: 'https://tadeasburda.sk/api/{teacherId}/students',
            headers: {
                 'content-type': 'application/json'
                Authorization: `Bearer ${JWTToken}`,
            },
            data: newStudents
        };
    
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } */
}