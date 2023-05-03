
export type TypeResponzeALLTechersObject = {
    id: string,
    name: string,
    subject: string
}
export type TypeResponzeALLTechers = [
    TypeResponzeALLTechersObject
]

export type TypeRespoAllTeacherAndStatus = {
    responzeALLtecherDATA: TypeResponzeALLTechers,
    status: number
}

export type TyperesponseTeacherByIdAndstatus = {
    responzeTecherByIdDATA: TypeResponzeALLTechersObject,
    status: number
}

