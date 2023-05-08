import React from "react"
import servicesUpdateTeacherObjectFromAPI from "../services/servicesUpdateTeacherObjectFromAPI"
import { TypeNewStudents, TypeOneStudents, TypeUpdateTeacher } from "../types"
import { TypeVerification } from "../../ConfirmationResp/type"
import apiServicesUpdateTeacher from "../../API/UpdateTeacher.API"
import { ConfirmationResp } from "../../ConfirmationResp"
import "../style/UpdateTeacher.style.css"
import { useNavigate } from "react-router-dom"
import servicesErrorResponze from "../../services/statusResponze"

function UpdateTeacher(): JSX.Element {
    const location = useNavigate()
    const InputsTeacherIdRefs = React.useRef<HTMLInputElement>(null)
    const InputsTeacherNameRefs = React.useRef<HTMLInputElement>(null)
    const InputsSubjectRefs = React.useRef<HTMLInputElement>(null)
    const [verification, setVerification] = React.useState<TypeVerification>({
        statusdisplay: false,
        stats: ""
    })
    const [students, setStudents] = React.useState<TypeNewStudents>([{
        name: "",
        class: ""
    }])


    /* vytvoranie noveho inputu pre studentov */
    const addFields = (event: React.FocusEvent<HTMLInputElement>): void => {
        const targetValue = event.currentTarget.value
        if (!targetValue) {
            let newfield = {
                name: '',
                class: ''
            }
            setStudents([...students, newfield])
        }
    }

/* nacitanie IDucitela s sessionStorage pokial smerujeme z AllTechru */
    React.useEffect(() => {
        const dataInStorage = sessionStorage.getItem("teacherID")
        if(dataInStorage !== null) {
            InputsTeacherIdRefs.current!.value = dataInStorage
        }
        return(() => sessionStorage.removeItem("teacherID"))
    }, [])




    /*vytvorenie formu updateucitela a osetrenie prazdneho inputu studentov a odoslanie formullara do API */
    const handleUpdateTeacher = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationToken")
        let UpdateTeacher: TypeUpdateTeacher = {
            id: "",
            name: "",
            subject: ""
        }
        if (InputsTeacherIdRefs.current && InputsTeacherNameRefs.current && InputsSubjectRefs.current) {
            UpdateTeacher = {
                id: InputsTeacherIdRefs.current.value,
                name: InputsTeacherNameRefs.current.value,
                subject: InputsSubjectRefs.current.value,
            }
        }

        /* osetrenie prazdnoty cakanie na potvrdenie*/
        const updateData = servicesUpdateTeacherObjectFromAPI.updateTeacherObjectFromAPI(UpdateTeacher, students)

        if (JWTToken !== null) {
            apiServicesUpdateTeacher.apiUpdateTeacher(JWTToken, updateData)
                .then((data: number) => {
                    if (data !== 401) {
                        setVerification({
                            statusdisplay: true,
                            stats: servicesErrorResponze.statusResponze(data)
                        })
                        if (data === 204) {
                            /* clear inputs*/
                            InputsTeacherIdRefs.current!.value = ""
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


    /* vytvaranie objectov studentov */
    const handleStidentsChange = (index: number, event: React.FormEvent<HTMLInputElement>): void => {
        const data = [...students]
        type ObjectKey = keyof TypeOneStudents
        const keys = event.currentTarget.name as ObjectKey
        data[index][keys] = event.currentTarget.value;
        setStudents(data)
    }


    return (
        <div className="updateTeacher">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="updateTeacherHeader">
                <h1>Update Teacher</h1>
            </div>

            <div className="updateTeacherContent">
                <div className="techerById">
                    <h1>ID teacher</h1>
                    <input
                        ref={InputsTeacherIdRefs}
                        name="id"
                        placeholder="Teacher ID"
                        type="text" />
                </div>
                <div className="createTeacherSub">
                    <div>
                        <h1>Teacher name</h1>
                        <input
                            ref={InputsTeacherNameRefs}
                            type="text"
                            name="name"
                            placeholder="teacher name" />
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
                                            name='name'
                                            placeholder='Name'
                                            onFocus={addFields}
                                            onChange={event => handleStidentsChange(index, event)} />
                                    </div>
                                    <div className="mapsInputs">
                                        <h1>Class</h1>

                                        <input
                                            name='class'
                                            placeholder='class'
                                            onChange={event => handleStidentsChange(index, event)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="AllcreateButton">
                <button
                    onClick={handleUpdateTeacher}>
                    Update..
                </button>
            </div>
        </div>
    )

}

export default UpdateTeacher