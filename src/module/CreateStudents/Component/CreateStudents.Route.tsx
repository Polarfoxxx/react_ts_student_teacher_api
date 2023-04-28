import React from "react"
import "../style/CreateStudents.style.css"
import { typeCreateStudents } from "../types"
import { ConfirmationResp } from "../../ConfirmationResp"
import { typeVerification } from "../../ConfirmationResp/type"
import apiServicesCreateStudents from "../../API/CreateStudents.API"

function CreateStudents(): JSX.Element {
    const [verification, setVerification] = React.useState<typeVerification>({ success: false, stats: false }) /* overovanie */
    const [createStudents, setCreateStudents] = React.useState<typeCreateStudents>({
        TeacherID: "",
        nameStudents: "",
        classe: "",
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
            .then((data: any) => {
                console.log(data)
                if (data) {
                    setVerification({ success: true, stats: true })
                } else { setVerification({ success: true, stats: false }); localStorage.clear() }
            })
            .catch(err => console.log(err))


        /* clear */
        setCreateStudents({ TeacherID: "", nameStudents: '', classe: '' })
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
                        value={createStudents.TeacherID}
                        name="TeacherID"
                        type="text" />
                </div>
                <div className="createnewStudents">
                    <div className="inpNameStudent">
                        <h1>Name student</h1>
                        <input
                            value={createStudents.nameStudents}
                            onChange={handleChangeinputElement}
                            name="nameStudents"
                            type="text" />
                    </div>
                    <div className="inpClassStudent">
                        <h1>Class</h1>
                        <input
                            value={createStudents.classe}
                            onChange={handleChangeinputElement}
                            name="classe"
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