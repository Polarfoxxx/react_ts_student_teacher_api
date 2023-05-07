import React from "react"
import { useNavigate } from "react-router-dom"
import "../style/CreateTeacher.style.css"
import { ConfirmationResp } from "../../ConfirmationResp"
import { TypeNewTeacher, TypeNewStudents, TypeOneStudents } from "../types"
import { TypeVerification } from "../../ConfirmationResp/type"
import servicesCreateTeacherObjectFromAPI from "../services/servicesCreateTeacherObjectFromAPI"
import apiServicesCreateTeacher from "../../API/CreateTeacher.API"
import servicesErrorResponze from "../../services/statusResponze"


function CreateTeacher(): JSX.Element {
    const location = useNavigate()
    const InputsTeacherNameRefs = React.useRef<HTMLInputElement>(null)
    const InputsSubjectRefs = React.useRef<HTMLInputElement>(null)
    const [students, setStudents] = React.useState<TypeNewStudents>([{
        name: "",
        class: ""
    }])
    const [verification, setVerification] = React.useState<TypeVerification>({      /* overovanie */
        success: false,
        stats: ""
    })

    /* vytvoranie noveho inputu pre studentov */
    const handlenewStudenstsForm = (event: React.FocusEvent<HTMLInputElement>): void => {
        const targetValue = event.currentTarget.value
        if (!targetValue) {
            const newForm = {
                name: "",
                class: ""
            }
            setStudents([...students, newForm])
        }
    }

    /*vytvorenie formu ucitela a osetrenie prazdneho inputu studentov a odoslanie formullara do API */
    const handleCreateTeacher = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationToken")
        let teacher: TypeNewTeacher = {
            name: "",
            subject: "",
        }
        if (InputsTeacherNameRefs.current && InputsSubjectRefs.current) {
            teacher = {
                name: InputsTeacherNameRefs.current.value,
                subject: InputsSubjectRefs.current.value
            }
        }
        /* osetrenie prazdnoty cakanie na potvrdenie*/
        const newTeacher = servicesCreateTeacherObjectFromAPI.createTeacherObjectFromAPI(teacher, students)

        if (JWTToken !== null) {
            apiServicesCreateTeacher.apiCreateTeacher(JWTToken, newTeacher)
                .then((data: number) => {
                    if (data !== 401) {
                        setVerification({
                            success: true,
                            stats: servicesErrorResponze.statusResponze(data)
                        })
                        if (data === 201) {
                            /* clear inputs*/
                            InputsTeacherNameRefs.current!.value = ""
                            InputsSubjectRefs.current!.value = ""
                            setStudents([{
                                name: "",
                                class: ""
                            }])
                        }
                    } else {
                        localStorage.removeItem("authenticationToken");
                        location("LoginPage")
                    }
                })
                .catch(err => console.error(err))
        }
    }

    /* tvorba pole studentov */
    const handleChangeNewStudent = (index: number, event: React.ChangeEvent<HTMLInputElement>): void => {
        const data: TypeNewStudents = [...students]
        type Typekey = keyof TypeOneStudents
        const keys = event.currentTarget.name as Typekey
        data[index][keys] = event.currentTarget.value;
        setStudents(data)
    }

    return (
        <div className="createTeacher">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="createTeacherHeader">
                <h1>Create new Teacher</h1>
            </div>

            <div className="createTeacherContent">
                <div className="createTeacgImage">
                    <img src="/img/techerman.png" alt="teacher" />
                </div>
                <div className="createTeacherSub">
                    <div>
                        <h1>Teacher name</h1>
                        <input
                            ref={InputsTeacherNameRefs}
                            type="text"
                            name="name"
                            placeholder="Teacher name" />
                    </div>
                    <div>
                        <h1>Subject</h1>
                        <input
                            ref={InputsSubjectRefs}
                            name="subject"
                            type="text"
                            placeholder="subject" />
                    </div>
                </div>
                <div className="createStudentsSub">
                    <div className="createSTContxt">
                        {students.map((input, index: number) => {
                            return (
                                <div
                                    className="mapsBox"
                                    key={index}>
                                    <div className="mapsInputs">
                                        <h1>Student name</h1>
                                        <input
                                            name="name"
                                            placeholder="Name"
                                            onFocus={handlenewStudenstsForm}
                                            onChange={(e) => handleChangeNewStudent(index, e)}
                                        />
                                    </div>
                                    <div className="mapsInputs">
                                        <h1>Class</h1>
                                        <input
                                            onChange={(e) => handleChangeNewStudent(index, e)}
                                            name="class"
                                            placeholder="Class"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="AllcreateButton">
                <button onClick={handleCreateTeacher}>
                    Create..
                </button>
            </div>
        </div>
    )

}

export default CreateTeacher