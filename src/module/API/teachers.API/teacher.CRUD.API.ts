import axios from "axios"

import { TypeRespoAllTeacherAndStatus } from "../types"
import { TypeNewTeacher } from "../../Teacher/types"
import { TyperesponseTeacherByIdAndstatus } from "../types"
import { TypeUpdateTeacherFromAPI } from "../../Teacher/types"

const api_CRUD_Teacher = {
    apiAllTeacher,
    apiCreateTeacher,
    apiTeacherById,
    apiUpdateTeacher
}
export default api_CRUD_Teacher

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


async function apiCreateTeacher(JWTToken: string, newTeacher: TypeNewTeacher): Promise<number> {
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