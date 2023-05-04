

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

export type TypeOneStudents = {
    name: string;
    class: string;
}

export type TypeNewStudents = {
    name: string,
    class: string
}[]

export type TypeNewTeacher = {
    name: string,
    subject: string
}

export type TypeCreateTeacherfromAPIs = {
    name: string,
    subject: string,
    students: TypeNewStudents
}
