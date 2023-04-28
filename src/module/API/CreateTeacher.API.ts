import axios from "axios"
import { typeNewTeacher } from "../CreateTeacher/types"


const apiServicesCreateTeacher = {
    apiCreateTeacher
}
export default apiServicesCreateTeacher


async function apiCreateTeacher(JWTToken : string, newTeacher: typeNewTeacher) {
    console.log(newTeacher);
    
/* 
    const options = {
        method: 'POST',
        url: 'https://tadeasburda.sk/api/teachers',
        headers: {
             'content-type': 'application/json'
            Authorization: `Bearer ${JWTToken}`,
        },
        data: newTeacher
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    } */
}