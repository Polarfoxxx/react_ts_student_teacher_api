import React from "react"
import { useNavigate } from "react-router-dom"
import { ConfirmationResp } from "../../ConfirmationResp"
import { TypeUpdateStudents } from "../type"
import { api_CRUD_Students } from "../../API"
import { TypeVerification } from "../../ConfirmationResp/type"
import { servicesStatusResponze } from "../../utils"
import "../style/UpdateStudents.style.css"

function UpdateStudents(): JSX.Element {
    const location = useNavigate()
    const InputsTeacherIdRefs = React.useRef<HTMLInputElement>(null)
    const InputsStudentIdRefs = React.useRef<HTMLInputElement>(null)
    const InputsNameRefs = React.useRef<HTMLInputElement>(null)
    const InputsClassRefs = React.useRef<HTMLInputElement>(null)

    const [verification, setVerification] = React.useState<TypeVerification>({   /* overovanie */
        statusdisplay: false,
        stats: ""
    })

    /* odoslanie formulara  do APIs */
    const handleSendFormular = () => {
        const JWTToken = localStorage.getItem("authenticationToken")
        let updateStudents: TypeUpdateStudents = {
            teacherId: "",
            id: "",
            name: "",
            class: "",
        }

        if (InputsTeacherIdRefs.current && InputsStudentIdRefs.current && InputsNameRefs.current && InputsClassRefs.current) {
            updateStudents = {
                teacherId: InputsTeacherIdRefs.current.value,
                id: InputsStudentIdRefs.current.value,
                name: InputsNameRefs.current.value,
                class: InputsClassRefs.current.value,
            }
        }

        if (JWTToken !== null) {
            api_CRUD_Students.apiUpdateStudents(JWTToken, updateStudents)
                .then((data: number) => {
                    if (data !== 401) {
                        setVerification({
                            statusdisplay: true,
                            stats: servicesStatusResponze.statusResponze(data)
                        })
                    } else { localStorage.clear(); location("LoginPage") }
                })
                .catch(err => console.error(err))
        }
        /* clear input*/
        InputsTeacherIdRefs.current!.value = ""
        InputsStudentIdRefs.current!.value = ""
        InputsNameRefs.current!.value = ""
        InputsClassRefs.current!.value = ""
    }

    return (
        <div className="updateStudents">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="updateStudentsHeader">
                <h1>Update Students</h1>
            </div>
            <div className="updateStudentContent">
                <div className="searcheTeacherID">
                    <h1>Teacher ID</h1>
                    <input
                        name="teacherId"
                        type="text" />
                </div>
                <div className="searcheStudentsID">
                    <h1>Student ID</h1>
                    <input
                        name="id"
                        type="text" />
                </div>
                <div className="createnewStudents">
                    <div className="inpNameStudent">
                        <h1>Name student</h1>
                        <input
                            name="name"
                            type="text" />
                    </div>
                    <div className="inpClassStudent">
                        <h1>Class</h1>
                        <input
                            name="class"
                            type="text" />
                    </div>
                </div>
            </div>
            <div className="buttonBlock">
                <button onClick={handleSendFormular}>
                    Update..
                </button>
            </div>
        </div>
    )
}


export default UpdateStudents