import axios from "axios"
import { TypeUpdateStudents } from "../Student.module/type";

const apiServicesUpdateStudents = {
    apiUpdateStudents
}
export default apiServicesUpdateStudents

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