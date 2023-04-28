import React from "react"
import { useNavigate } from "react-router-dom"
import apiServicesAllStudents from "../../API/AllStudents.API"
import { typeALLStudents } from "../types"
import "../style/StudentsALL.style.css"

function StudentsALL(): JSX.Element {
    const location = useNavigate()
    const [ ALLStudents, setALLStudents] = React.useState<typeALLStudents>({
        TeacherID: "",
        StudentsID: ""
    })


    const handleChangeinputElement = (event: React.FormEvent<HTMLInputElement>): void => {
        type keyinObject = keyof typeALLStudents
        const keys = event.currentTarget.name as keyinObject
        ALLStudents[keys] = event.currentTarget.value
        setALLStudents({ ...ALLStudents })
    }

    /* odoslanie formullara do API */
    const handleSendFormular = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationKey") as string

        apiServicesAllStudents.apiAllStudents(JWTToken, ALLStudents)
            .then((data: any) => {
                console.log(data)
             /*    if (!data) {
                    localStorage.clear(); location("LoginPage")} */
            })
            .catch(err => console.log(err))


        /* clear */
        setALLStudents({ TeacherID: "", StudentsID: ''})
    }

    return (
        <div className="CreateStudents">
           
            <div className="CreateStudentsHeader">
                <h1>Students</h1>
            </div>
            <div className="CreateContent">
                <div className="searcheTeacherID">
                    <h1>Teacher ID</h1>
                    <input
                        onChange={handleChangeinputElement}
                        value={ALLStudents.TeacherID}
                        name="TeacherID"
                        type="text" />
                </div>
                <div className="createnewStudents">
                    <div className="inpNameStudent">
                        <h1>Student ID</h1>
                        <input
                            value={ALLStudents.StudentsID}
                            onChange={handleChangeinputElement}
                            name="StudentsID"
                            type="text" />
                    </div>
                 
                </div>
                <div className="imgesoo">
                    <img src="../../../../img/favpng_lesson-cartoon-student.png" alt="" />
                </div>
            </div>
            <div className="buttonBlocj">
                <button onClick={handleSendFormular}>Create..</button>
            </div>
        </div>
    )
}

export default StudentsALL