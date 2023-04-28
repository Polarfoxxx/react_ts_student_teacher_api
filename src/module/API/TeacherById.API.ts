import axios from "axios"
import { typeResponzeALLTechersObject } from "./types"

const apiServicesTeacherById = {
    apiTeacherById
}
export default apiServicesTeacherById

async function apiTeacherById(JWTToken: string, teacherID: string): Promise<typeResponzeALLTechersObject> {
    let responzeTecherByIdDATA: typeResponzeALLTechersObject = {id: "", name: "",subject: ""}
    const options = {
        method: 'GET',
        url: `https://tadeasburda.sk/api/teachers/${teacherID}`,
        headers: {
                "Authorization": `Bearer ${JWTToken}`,
                'content-type': 'application/json'},
        data: teacherID
    };

    try {
        const response = await axios.request(options);
        responzeTecherByIdDATA = response.data;
    } catch (error) {
        console.error(error);
    }  
    return(
        responzeTecherByIdDATA
    )
}