
import { typeNewStudents } from "../../CreateTeacher/types"
import { typeUpdateTeacher } from "../types"
import { typeUpdateTeacherFromAPI } from "../types"

const servicesUpdateTeacherObjectFromAPI = {
    updateTeacherObjectFromAPI
}
export default servicesUpdateTeacherObjectFromAPI


const defUpdateTeacher = {
    id: "",
    name: "",
    subject: "",
    students: []
}

function updateTeacherObjectFromAPI(teacher: typeUpdateTeacher, studets: typeNewStudents): typeUpdateTeacherFromAPI {
    let teacherUpdateForAPIS: typeUpdateTeacherFromAPI = defUpdateTeacher

    const allStObject = [...studets]
    const newStArry: typeNewStudents = allStObject.filter(item => item.name)

    teacherUpdateForAPIS = {
        id: teacher.id,
        name: teacher.name,
        subject: teacher.subject,
        students: newStArry
    } 
    console.log(teacherUpdateForAPIS);
    return (
        teacherUpdateForAPIS
    )
}