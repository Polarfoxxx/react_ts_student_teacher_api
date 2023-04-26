import {useState} from "react"

import { typeNewTeacher } from "../../CreateTeacher/types"
import { typeNewStudents } from "../../CreateTeacher/types"
import "../style/UpdateTeacher.style.css"


function UpdateTeacher(): JSX.Element {
    const [inputFields, setInputFields] = useState<typeNewStudents>([{ name: '', class: '' }])
    const [teacher, setTeacher] = useState<typeNewTeacher>({ name: '', subject: '' })

    /* hlavny button na vytvorenie objektu do APIs */
    const handleCreateTeacher = () => {
        /* vymazanie prazdneho inputu */
        const allStObject = [...inputFields]
        const newStArry = allStObject.filter(item => item.name)

        const teacherObjectForAPIS = {
            name: teacher.name,
            subject: teacher.subject,
            students: newStArry
        }
        console.log(teacherObjectForAPIS);
        setInputFields([{ name: '', class: '' }])
        setTeacher({ name: '', subject: '' })
    }

    /* vytvoranie noveho inputu pre studentov */
    const addFields = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetValue = event.currentTarget.value
        if (!targetValue) {
            let newfield = { name: '', class: '' }
            setInputFields([...inputFields, newfield])
        }
    }
    /* vytvaranie objectov studentov */
    const handleStidentsChange = (index: number, event: React.FormEvent<HTMLInputElement>) => {
        let data: any = [...inputFields];
        data[index][event.currentTarget.name] = event.currentTarget.value;
        setInputFields(data)
    }
    /* vytvorenie objectu ucitela */
    const handleTeacherChange = (event: React.FormEvent<HTMLInputElement>) => {
        let valuesTeacherInputs = event.currentTarget.value as string
        event.currentTarget.name === "name" ? setTeacher(prew => ({ ...prew, name: valuesTeacherInputs })) : setTeacher(prew => ({ ...prew, subject: valuesTeacherInputs }))
    }

    return (
        <div className="CreateTeacher">
            <div className="createTeacherHeader">
                <h1>Create new Teacher</h1>
            </div>

            <div className="createTeacherContent">
                <div className="techerById">
                    <h1>ID teacher</h1>
                    <input 
                        placeholder="ID"
                        type="text" />
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
                <button onClick={handleCreateTeacher}>Update..</button>

            </div>
        </div>
    )

}

 export default UpdateTeacher