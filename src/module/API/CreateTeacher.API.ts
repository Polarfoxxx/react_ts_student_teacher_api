import axios from "axios"
import { typeNewTeacher } from "../CreateTeacher/types"


const apiServicesCreateTeacher = {
    apiCreateTeacher
}
export default apiServicesCreateTeacher


async function apiCreateTeacher(newTeacher: typeNewTeacher) {
    const yourJWTToken = localStorage.getItem("authenticationKey")

    const options = {
        method: 'POST',
        url: 'https://tadeasburda.sk/api/teachers',
        headers: {
            Authorization: `Bearer ${yourJWTToken}`,
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}