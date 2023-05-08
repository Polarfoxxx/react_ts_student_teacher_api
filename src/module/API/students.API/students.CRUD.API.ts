import axios from "axios"
import { TypeALLStudents } from "../../Student/type";
import { TypeCreateStudents } from "../../Student/type"
import { TypeUpdateStudents } from "../../Student/type";

const api_CRUD_Students = {
    apiAllStudents,
    apiCreateStudents,
    apiUpdateStudents
}
export default api_CRUD_Students

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



async function apiUpdateStudents(JWTToken: string, updateStudents: TypeUpdateStudents): Promise<number> {
    let updateStudentRespStatus: number = 0
    const options = {
        method: 'PUT',
        url: `https://tadeasburda.sk/api/teachers/${updateStudents.teacherId}/students/${updateStudents.id}`,
        headers: {
            "Authorization": `Bearer ${JWTToken}`,
            'content-type': 'application/json',
        },
        data: updateStudents
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        updateStudentRespStatus = response.status
    } catch (error) {
        console.error(error);
    }
    return (
        updateStudentRespStatus
    )
}