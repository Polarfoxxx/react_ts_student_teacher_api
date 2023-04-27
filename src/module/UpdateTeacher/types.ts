
import { typeNewStudents } from "../CreateTeacher/types"

export type typeUpdateTeacher = {
    id: string,
    name: string,
    subject: string
}
export type typeUpdateTeacherFromAPI = {
    id: string,
    name: string,
    subject: string,
    students: typeNewStudents
}
