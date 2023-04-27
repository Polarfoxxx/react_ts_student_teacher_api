

export type typeNewStudents = {
    name: string,
    class: string
}[]

export type typeNewTeacher = {
    name: string,
    subject: string
}

export type typeCreateTeacherfromAPIs = {
    name: string,
    subject: string,
    students: typeNewStudents
}