import axios from "axios"

import { typeUpdateTeacherFromAPI } from "../UpdateTeacher/types"


const apiServicesUpdateTeacher = {
    apiUpdateTeacher
}
export default apiServicesUpdateTeacher

async function apiUpdateTeacher(JWTToken: string, updateTeacherDATA: typeUpdateTeacherFromAPI) {
    console.log(updateTeacherDATA);
    /* 
    const options = {
        method: 'PUT',
        url: 'https://tadeasburda.sk/api/teachers{teacherId}',
        headers: {
                "Authorization": `Bearer ${JWTToken}`
                'content-type': 'application/json'},
        },
        data: updateTeacherDATA
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    } */
}