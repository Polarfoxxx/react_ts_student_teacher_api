import axios from "axios"
import { TypeUpdateTeacherFromAPI } from "../Teacher.module/types"

const apiServicesUpdateTeacher = {
    apiUpdateTeacher
}
export default apiServicesUpdateTeacher

async function apiUpdateTeacher(JWTToken: string, updateTeacherDATA: TypeUpdateTeacherFromAPI): Promise<number> {
    let responseUpdateTeacherDATA: number = 0
    const options = {
        method: 'PUT',
        url: `https://tadeasburda.sk/api/teachers/${updateTeacherDATA.id}`,
        headers: {
            "Authorization": `Bearer ${JWTToken}`,
            'content-type': 'application/json',
        },
        data: updateTeacherDATA
    }

    try {
        const response = await axios.request(options);
        responseUpdateTeacherDATA = response.status;
    } catch (error) {
        console.error(error);
    }
    return (
        responseUpdateTeacherDATA
    )
}