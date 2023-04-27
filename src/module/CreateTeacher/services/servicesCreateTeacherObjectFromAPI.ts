
import { typeNewTeacher } from "../types"
import { typeNewStudents } from "../types"
import { typeCreateTeacherfromAPIs } from "../types"

const servicesCreateTeacherObjectFromAPI = {
    createTeacherObjectFromAPI
}
export default servicesCreateTeacherObjectFromAPI

const defCreateTeacher = {
    name: "",
    subject: "",
    students: []
}

function createTeacherObjectFromAPI(teacher: typeNewTeacher, studets: typeNewStudents): typeCreateTeacherfromAPIs {
    let teacherObjectForAPIS: typeCreateTeacherfromAPIs = defCreateTeacher

    const allStObject = [...studets]
    const newStArry: typeNewStudents = allStObject.filter(item => item.name)
    
    teacherObjectForAPIS = {
        name: teacher.name,
        subject: teacher.subject,
        students: newStArry
    }
    console.log(teacherObjectForAPIS);
    return (
        teacherObjectForAPIS
    )
}