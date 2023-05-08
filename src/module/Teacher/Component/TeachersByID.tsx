import React from "react"
import { api_CRUD_Teacher } from "../../API"
import { useNavigate } from "react-router-dom"
import { TyperesponseTeacherByIdAndstatus, TypeResponzeALLTechersObject } from "../../API/types"
import "../style/TeacherById.style.css"

function TeachersByID(): JSX.Element {
    const location = useNavigate()
    const InputsTeacherIdRefs = React.useRef<HTMLInputElement>(null)
    const [responzeDATA, setResponzeDATA] = React.useState<TypeResponzeALLTechersObject>({
        id: "",
        name: "",
        subject: ""
    })

    /* odoslanie formulara do API a jwt JWTToken*/
    const handleSendTeacherID = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationToken")
        const teacherID = InputsTeacherIdRefs.current ? InputsTeacherIdRefs.current.value : ""

        if (JWTToken !== null) {
            api_CRUD_Teacher.apiTeacherById(JWTToken, teacherID)
                .then((data: TyperesponseTeacherByIdAndstatus) => {
                    if (data.status !== 401) {
                        setResponzeDATA(data.responzeTecherByIdDATA)
                    } else {
                        localStorage.removeItem("authenticationToken");
                        location("LoginPage")
                    }
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <div className="teacherById">
            <div className="teacherByIDHeader">
                <h1>
                    Search teacher by ID
                </h1>
            </div>
            <div className="teacherByIDContent">
                <div className="seacheTeacher">
                    <input
                        ref={InputsTeacherIdRefs}
                        placeholder="Teacher ID"
                        type="search" />
                </div>
                <div className="btbSearche">
                    <button
                        onClick={handleSendTeacherID}>
                        Search
                    </button>
                </div>
                <div className="seatcheResults">
                        <div className="respoDATA">
                            <div className="ResId">
                                <h1>
                                    {responzeDATA.id}
                                </h1>
                            </div>
                            <div className="Resname">
                                <h1>
                                    {responzeDATA.name}
                                </h1>
                            </div>
                            <div className="Ressubject">
                                <h1>
                                    {responzeDATA.subject}
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default TeachersByID