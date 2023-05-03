import React from "react"
/* import { useNavigate } from "react-router-dom" */
import apiServicesAllStudents from "../../API/AllStudents.API"
import { TypeALLStudents } from "../types"
import "../style/StudentsALL.style.css"

function StudentsALL(): JSX.Element {
    const InputsTeacherIdRefs = React.useRef<HTMLInputElement>(null)
    const InputsStudentIdRefs = React.useRef<HTMLInputElement>(null)
    /*  const location = useNavigate() */

    /* odoslanie formullara do API */
    const handleSendFormular = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationToken")
        let students: TypeALLStudents = {
            teacherId: "",
            studentId: "",
        }

        if (InputsTeacherIdRefs.current && InputsStudentIdRefs.current) {
            students = {
                teacherId: InputsTeacherIdRefs.current.value,
                studentId: InputsStudentIdRefs.current.value
            }
        }


        if (JWTToken !== null) {
            apiServicesAllStudents.apiAllStudents(JWTToken, students)
                .then((data: any) => {  /* Cors nefunguje */
                    console.log(data)
                    /*    if (!data) {
                           localStorage.clear(); location("LoginPage")} */
                })
                .catch(err => console.error(err))

            /* clear input*/
            InputsTeacherIdRefs.current!.value = ""
            InputsStudentIdRefs.current!.value = ""
        }
    }

    return (
        <div className="studentsByID">
            <div className="studentsByIDHeader">
                <h1>Students</h1>
            </div>
            <div className="studentsByIDContent">
                <div className="searcheTeacherID">
                    <h1>Teacher ID</h1>
                    <input
                        ref={InputsTeacherIdRefs}
                        name="teacherId"
                        type="text" />
                </div>
                <div className="createnewStudents">
                    <div className="inpNameStudent">
                        <h1>Student ID</h1>
                        <input
                            ref={InputsStudentIdRefs}
                            name="studentId"
                            type="text" />
                    </div>
                </div>
                <div className="studentsimg">
                    <img src="/img/favpng_lesson-cartoon-student.png" alt="student" />
                </div>
            </div>
            <div className="buttonBlok">
                <button onClick={handleSendFormular}>
                    Search..
                </button>
            </div>
        </div>
    )
}

export default StudentsALL