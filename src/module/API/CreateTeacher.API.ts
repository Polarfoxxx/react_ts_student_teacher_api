import axios from "axios"
import { typeNewTeacher } from "../CreateTeacher/types"


const apiServicesCreateTeacher = {
    apiCreateTeacher
}
export default apiServicesCreateTeacher

async function apiCreateTeacher(JWTToken: string, newTeacher: typeNewTeacher): Promise<number> {
    let responseCreateteacherDATA: number = 0
    const options = {
        method: 'POST',
        url: 'https://tadeasburda.sk/api/teachers',
        headers: {
            'content-type': 'application/json',
            "Authorization": `Bearer ${JWTToken}`
        },
        data: newTeacher
    };

    try {
        const response = await axios.request(options);
        responseCreateteacherDATA = response.status;
    } catch (error) {
        console.error(error);
    }
    return (
        responseCreateteacherDATA
    )
}