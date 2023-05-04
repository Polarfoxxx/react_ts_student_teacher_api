
import { TypeNewStudents, TypeUpdateTeacher, TypeUpdateTeacherFromAPI } from "../types"

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

function updateTeacherObjectFromAPI(teacher: TypeUpdateTeacher, studets: TypeNewStudents): TypeUpdateTeacherFromAPI {
    let teacherUpdateForAPIS: TypeUpdateTeacherFromAPI = defUpdateTeacher

    const allStObject = [...studets]
    const newStArry: TypeNewStudents = allStObject.filter(item => item.name)

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