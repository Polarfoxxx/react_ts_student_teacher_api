import axios from "axios"
import { TypeRespoAllTeacherAndStatus } from "./types"

const apiServicesAllTeacher = {
    apiAllTeacher
}
export default apiServicesAllTeacher

async function apiAllTeacher(JWTToken: string): Promise<TypeRespoAllTeacherAndStatus> {
    let respoAllTeachersAndStatus: TypeRespoAllTeacherAndStatus = {
        responzeALLtecherDATA: [{
            id: "",
            name: "",
            subject: "",
        }],
        status: 0
    }

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
        respoAllTeachersAndStatus = {
            responzeALLtecherDATA: response.data,
            status: response.status
        };
    } catch (error) {
        console.error(error);
    }
    return (
        respoAllTeachersAndStatus
    )
}