
import { TypeNewStudents } from "../CreateTeacher/types"

export type TypeUpdateTeacher = {
    id: string,
    name: string,
    subject: string
}
export type TypeUpdateTeacherFromAPI = {
    id: string,
    name: string,
    subject: string,
    students: TypeNewStudents
}
