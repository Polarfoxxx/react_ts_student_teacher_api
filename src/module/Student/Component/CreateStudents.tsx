import React from "react"
import { useNavigate } from "react-router-dom"
import { TypeCreateStudents } from "../type"
import { ConfirmationResp } from "../../ConfirmationResp"
import { TypeVerification } from "../../ConfirmationResp/type"
import { api_CRUD_Students } from "../../API"
import { servicesStatusResponze } from "../../utils"
import "../style/CreateStudents.style.css"


function CreateStudents(): JSX.Element {
    const location = useNavigate()
    const InputsTeacherIdRefs = React.useRef<HTMLInputElement>(null)
    const InputsNameRefs = React.useRef<HTMLInputElement>(null)
    const InputsClassRefs = React.useRef<HTMLInputElement>(null)
    const [verification, setVerification] = React.useState<TypeVerification>({  /* overovanie */
        statusdisplay: false,
        stats: ""
    })

    /* odoslanie formullara do API */
    const handleSendFormular = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationToken")
        let createStudents: TypeCreateStudents = {
            teacherId: "",
            name: "",
            class: ""
        }

        if (InputsTeacherIdRefs.current && InputsNameRefs.current && InputsClassRefs.current) {
            createStudents = {
                teacherId: InputsTeacherIdRefs.current.value,
                name: InputsNameRefs.current.value,
                class: InputsClassRefs.current.value,
            }
        }

        if (JWTToken !== null) {
            api_CRUD_Students.apiCreateStudents(JWTToken, createStudents)
                .then((data: number) => {
                    if (data !== 401) {
                        setVerification({
                            statusdisplay: true,
                            stats: servicesStatusResponze.statusResponze(data)
                        })
                        /* clear input */
                        InputsTeacherIdRefs.current!.value = ""
                        InputsNameRefs.current!.value = ""
                        InputsClassRefs.current!.value = ""
                    } else {
                        localStorage.removeItem("authenticationToken"); location("LoginPage")
                    }
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <div className="createStudents">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="createStudentsHeader">
                <h1>Create Students</h1>
            </div>
            <div className="createContent">
                <div className="searcheTeacherID">
                    <h1>Teacher ID</h1>
                    <input
                        defaultValue=""
                        ref={InputsTeacherIdRefs}
                        name="teacherId"
                        type="text" />
                </div>
                <div className="createnewStudents">
                    <div className="inpNameStudent">
                        <h1>Name student</h1>
                        <input
                            defaultValue=""
                            ref={InputsNameRefs}
                            name="name"
                            type="text" />
                    </div>
                    <div className="inpClassStudent">
                        <h1>Class</h1>
                        <input
                            defaultValue=""
                            ref={InputsClassRefs}
                            name="class"
                            type="text" />
                    </div>
                </div>
                <div className="imges">
                    <img src="/img/studedents.png" alt="teacher" />
                </div>
            </div>
            <div className="buttonBlock">
                <button onClick={handleSendFormular}>
                    Create..
                </button>
            </div>
        </div>
    )
}

export default CreateStudents