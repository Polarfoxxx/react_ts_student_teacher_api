import axios from "axios"
import { typeALLStudents } from "../StudentsALL/types"

const apiServicesAllStudents = {
    apiAllStudents
}
export default apiServicesAllStudents

async function apiAllStudents(JWTToken: string, allStudents: typeALLStudents)  {
    console.log(allStudents);
    
    
      /*  const options = {
        method: 'GET',
        url: 'https://tadeasburda.sk/api/{teacherId}/students',
        headers: {
             "Authorization": `Bearer ${JWTToken}`
            'content-type': 'application/json'}
    };

    try {
        const response = await axios.request(options);
        console.log(response);
    } catch (error) {
        console.error(error);
    }  */
}