import axios from "axios"


const apiServicesTeacherById = {
    apiTeacherById
}
export default apiServicesTeacherById

async function apiTeacherById(JWTToken: string, teacherID: string) {
console.log(teacherID);
    
       /*  const options = {
        method: 'GET',
        url: 'https://tadeasburda.sk/api/teachers{teachersId}',
        headers: {
                "Authorization": `Bearer ${JWTToken}`
                'content-type': 'application/json'},
        data: teacherID
    };

    try {
        const response = await axios.request(options);
        console.log(response);
    } catch (error) {
        console.error(error);
    }  */
}