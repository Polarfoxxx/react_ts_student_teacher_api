import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../style/CreateTeacher.style.css"
import { ConfirmationResp } from "../../ConfirmationResp"
import { typeNewTeacher, typeNewStudents } from "../types"
import { typeVerification } from "../../ConfirmationResp/type"
import servicesCreateTeacherObjectFromAPI from "../services/servicesCreateTeacherObjectFromAPI"
import apiServicesCreateTeacher from "../../API/CreateTeacher.API"
import servicesErrorResponze from "../../services/errorResponze" // NOTE: nemas API modul? vsetko ostatne su moduly len API nie

function CreateTeacher(): JSX.Element {
    const location = useNavigate()
    const [verification, setVerification] = useState<typeVerification>({ success: false, stats: "" }) /* overovanie */
    const [inputFields, setInputFields] = useState<typeNewStudents>([{ name: '', class: '' }])
    const [teacher, setTeacher] = useState<typeNewTeacher>({ name: '', subject: '' })

    /* odoslanie formullara do API */
    const handleCreateTeacher = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationKey") as string // BAD: preco as string ked to moze byt aj null?

        /* osetrenie prazdnoty cakanie na potvrdenie*/
        const newTeacher = servicesCreateTeacherObjectFromAPI.createTeacherObjectFromAPI(teacher, inputFields)

        newTeacher.name && apiServicesCreateTeacher.apiCreateTeacher(JWTToken, newTeacher)
            .then((data: number) => {
                if (data !== 401) {
                    setVerification({ success: true, stats: servicesErrorResponze.errorResponze(data) })
                } else { localStorage.clear(); location("LoginPage") } // BAD: formatovanie, preco to mas v jednom riadku ked inde to tak nemas?
            })
            .catch(err => console.log(err)) 

        /* clear */
        setInputFields([{ name: '', class: '' }])
        setTeacher({ name: '', subject: '' })
    }

    /* vytvoranie noveho inputu pre studentov */
    const addFields = (event: React.FocusEvent<HTMLInputElement>): void => {
        const targetValue = event.currentTarget.value
        if (!targetValue) {
            let newfield = { name: '', class: '' }
            setInputFields([...inputFields, newfield])
        }
    }
    /* vytvaranie objectov studentov */
    const handleStidentsChange = (index: number, event: React.FormEvent<HTMLInputElement>): void => {
        let data: any = [...inputFields]; // BAD: preco any? len preto ze ti o riadok nizsie vyhodi error? tuto predsa vies typ
        data[index][event.currentTarget.name] = event.currentTarget.value;
        setInputFields(data)
    }
    /* vytvorenie objectu ucitela */
    const handleTeacherChange = (event: React.FormEvent<HTMLInputElement>): void => {
        let valuesTeacherInputs = event.currentTarget.value as string // NOTe: preco tu aj as string ked uz vies ze to je string?
        event.currentTarget.name === "name" ? setTeacher(prew => ({ ...prew, name: valuesTeacherInputs })) : setTeacher(prew => ({ ...prew, subject: valuesTeacherInputs }))
    }

    return (
        <div className="CreateTeacher">
            <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="createTeacherHeader">
                <h1>Create new Teacher</h1>
            </div>

            <div className="createTeacherContent">
                <div className="createTeacgImage">
                    <img src="../../../../img/techerman.png" alt="" />
                </div>
                <div className="createTeacherSub">
                    <div>
                        <h1>Teacher name</h1>
                        <input
                            onChange={handleTeacherChange}
                            type="text"
                            name="name"
                            value={teacher.name}
                            placeholder="teacher name" />
                    </div>
                    <div>
                        <h1>Subject</h1>
                        <input
                            onChange={handleTeacherChange}
                            name="subject"
                            type="text"
                            value={teacher.subject}
                            placeholder="subject" />
                    </div>
                </div>
                <div className="createStudentsSub">
                    <div className="createSTContxt">
                        {inputFields.map((input, index: number) => {
                            return (
                                <div
                                    className="mapsBox"
                                    key={index}>
                                    <div className="mapsInputs">
                                        <h1>Student name</h1>
                                        <input
                                            name='name' // BAD: preco tu mas '' a inde ""?
                                            placeholder='Name'
                                            onFocus={addFields} // BAD: preco nepouzivas konvenciu a nieje to handle? vsade inde mas handle
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
                <button onClick={handleCreateTeacher}>Create..</button>

            </div>
        </div>
    )

}

export default CreateTeacher