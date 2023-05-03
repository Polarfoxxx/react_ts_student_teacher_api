import axios from "axios"
import { TyperesponseTeacherByIdAndstatus } from "./types"

const apiServicesTeacherById = {
    apiTeacherById
}
export default apiServicesTeacherById

async function apiTeacherById(JWTToken: string, teacherID: string): Promise<TyperesponseTeacherByIdAndstatus> {
    let responseTeacherByIDAndStatus = {
        responzeTecherByIdDATA: {
            id: "",
            name: "",
            subject: ""
        },
        status: 0
    }

    const options = {
        method: 'GET',
        url: `https://tadeasburda.sk/api/teachers/${teacherID}`,
        headers: {
            "Authorization": `Bearer ${JWTToken}`,
            'content-type': 'application/json'
        },
        data: teacherID
    };

    try {
        const response = await axios.request(options);
        responseTeacherByIDAndStatus = {
            responzeTecherByIdDATA: response.data,
            status: response.status
        }
    } catch (error) {
        console.error(error);
    }
    return (
        responseTeacherByIDAndStatus
    )
}