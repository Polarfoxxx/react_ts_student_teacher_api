
import { TypeNewTeacher,TypeNewStudents,TypeCreateTeacherfromAPIs } from "../types"

const servicesCreateTeacherObjectFromAPI = {
    createTeacherObjectFromAPI
}
export default servicesCreateTeacherObjectFromAPI

const defCreateTeacher = {
    name: "",
    subject: "",
    students: []
}

function createTeacherObjectFromAPI(teacher: TypeNewTeacher, studets: TypeNewStudents): TypeCreateTeacherfromAPIs {
    let teacherObjectForAPIS: TypeCreateTeacherfromAPIs = defCreateTeacher
    const allStObject = [...studets]
    const newStArry: TypeNewStudents = allStObject.filter(item => item.name)
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