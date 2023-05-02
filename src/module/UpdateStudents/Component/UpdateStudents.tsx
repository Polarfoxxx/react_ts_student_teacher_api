import React from "react"
import { useNavigate } from "react-router-dom"
import "../style/UpdateStudents.style.css"
import { ConfirmationResp } from "../../ConfirmationResp"
import { TypeUpdateStudents } from "../type"
import apiServicesUpdateStudents from "../../API/UpdateStudents"
import { TypeVerification } from "../../ConfirmationResp/type"
import servicesErrorResponze from "../../services/errorResponze"

function UpdateStudents(): JSX.Element {
    const location = useNavigate()
    const [verification, setVerification] = React.useState<TypeVerification>({ success: false, stats: "" }) /* overovanie */
    const [updateStudents, setupdateStudents] = React.useState<TypeUpdateStudents>({
        teacherId: "",
        id: "",
        name: "",
        class: "",
    })
    const JWTToken = localStorage.getItem("authenticationKey") as string

    /* vytvorenie objectu */
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
        type keyinObject = keyof TypeUpdateStudents
        let keys = event.currentTarget.name as keyinObject
        updateStudents[keys] = event.currentTarget.value
        setupdateStudents({ ...updateStudents })
    }

    /* odoslanie formulara  do APIs */
    const handleSendForm = () => {
        apiServicesUpdateStudents.apiUpdateStudents(JWTToken, updateStudents)
            .then((data: number) => {
                if (data !== 401) {
                    setVerification({ success: true, stats: servicesErrorResponze.errorResponze(data) })
                } else { localStorage.clear(); location("LoginPage") }
            })
            .catch(err => console.log(err))

        /* clear */
        setupdateStudents({
            teacherId: "",
            id: "",
            name: "",
            class: "",
        })
    }

    return (
        <div className="CreateStudents">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="CreateStudents">
                <div className="CreateStudentsHeader">
                    <h1>Update Students</h1>
                </div>
                <div className="CreateContent">
                    <div className="searcheTeacherID">
                        <h1>Teacher ID</h1>
                        <input
                            value={updateStudents.teacherId}
                            name="teacherId"
                            onChange={handleInputChange}
                            type="text" />
                    </div>
                    <div className="searcheStudentsID">
                        <h1>Student ID</h1>
                        <input
                            value={updateStudents.id}
                            name="id"
                            onChange={handleInputChange}
                            type="text" />
                    </div>
                    <div className="createnewStudents">
                        <div className="inpNameStudent">
                            <h1>Name student</h1>
                            <input
                                value={updateStudents.name}
                                name="name"
                                onChange={handleInputChange}
                                type="text" />
                        </div>
                        <div className="inpClassStudent">
                            <h1>Class</h1>
                            <input
                                value={updateStudents.class}
                                name="class"
                                onChange={handleInputChange}
                                type="text" />
                        </div>
                    </div>

                </div>
                <div className="buttonBlocj">
                    <button onClick={handleSendForm}>Update..</button>
                </div>
            </div>
        </div>
    )
}


export default UpdateStudents