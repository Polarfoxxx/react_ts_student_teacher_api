
import { typeNewTeacher } from "../types"
import { typeNewStudents } from "../types"

const servicesCreateTeacherObjectFromAPI = {
    createTeacherObjectFromAPI
}
export default servicesCreateTeacherObjectFromAPI

type typeCreateTeacher = {
    name: string,
    subject: string,
    students: typeNewStudents
}
const defCreateTeacher = {
    name: "",
    subject: "",
    students: []
}


function createTeacherObjectFromAPI(teacher: typeNewTeacher, studets: typeNewStudents): typeCreateTeacher {
    let teacherObjectForAPIS: typeCreateTeacher = defCreateTeacher

    const allStObject = [...studets]
    const newStArry = allStObject.filter(item => item.name)
    
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