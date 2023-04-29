import React from "react"
import { useNavigate } from "react-router-dom"
import "../style/CreateStudents.style.css"
import { typeCreateStudents } from "../types"
import { ConfirmationResp } from "../../ConfirmationResp"
import { typeVerification } from "../../ConfirmationResp/type"
import apiServicesCreateStudents from "../../API/CreateStudents.API"
import servicesErrorResponze from "../../services/errorResponze"

function CreateStudents(): JSX.Element {
    const location = useNavigate()
    const [verification, setVerification] = React.useState<typeVerification>({ success: false, stats: "" }) /* overovanie */
    const [createStudents, setCreateStudents] = React.useState<typeCreateStudents>({
        teacherId: "",
        name: "",
        class: "",
    })


    const handleChangeinputElement = (event: React.FormEvent<HTMLInputElement>): void => {
        type keyinObject = keyof typeCreateStudents
        const keys = event.currentTarget.name as keyinObject
        createStudents[keys] = event.currentTarget.value
        setCreateStudents({ ...createStudents })
    }


    /* odoslanie formullara do API */
    const handleSendFormular = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationKey") as string

        apiServicesCreateStudents.apiCreateStudents(JWTToken, createStudents)
        .then((data : number) => {
            if(data !== 401) {
                  setVerification({success: true, stats: servicesErrorResponze.errorResponze(data)})
              }else {localStorage.clear(); location("LoginPage")}
          })
            .catch(err => console.log(err))


        /* clear */
        setCreateStudents({ teacherId: "", name: '', class: '' })
    }

    return (
        <div className="CreateStudents">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="CreateStudentsHeader">
                <h1>Create Students</h1>
            </div>
            <div className="CreateContent">
                <div className="searcheTeacherID">
                    <h1>Teacher ID</h1>
                    <input
                        onChange={handleChangeinputElement}
                        value={createStudents.teacherId}
                        name="teacherId"
                        type="text" />
                </div>
                <div className="createnewStudents">
                    <div className="inpNameStudent">
                        <h1>Name student</h1>
                        <input
                            value={createStudents.name}
                            onChange={handleChangeinputElement}
                            name="name"
                            type="text" />
                    </div>
                    <div className="inpClassStudent">
                        <h1>Class</h1>
                        <input
                            value={createStudents.class}
                            onChange={handleChangeinputElement}
                            name="class"
                            type="text" />
                    </div>
                </div>
                <div className="imges">
                    <img src="../../../../img/studedents.png" alt="" />
                </div>
            </div>
            <div className="buttonBlocj">
                <button onClick={handleSendFormular}>Create..</button>
            </div>
        </div>
    )
}

export default CreateStudents