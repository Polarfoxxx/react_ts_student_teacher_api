
import axios from "axios"
import { TypeCreateStudents } from "../CreateStudents/types";

const apiServicesCreateStudents = {
    apiCreateStudents
}
export default apiServicesCreateStudents

async function apiCreateStudents(JWTToken: string, newStudents: TypeCreateStudents): Promise<number> {
    let responseCreateStudentsrDATA: number = 0
    const options = {
        method: 'POST',
        url: `https://tadeasburda.sk/api/teachers/${newStudents.teacherId}/students`,
        headers: {
            'content-type': 'application/json',
            "Authorization": `Bearer ${JWTToken}`,
        },
        data: newStudents
    };

    try {
        const response = await axios.request(options);
        responseCreateStudentsrDATA = response.status;
        console.log(response);

    } catch (error) {
        console.error(error);
    }
    return (
        responseCreateStudentsrDATA
    ) 
}