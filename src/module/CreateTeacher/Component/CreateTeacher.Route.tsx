import { useState } from "react"
import "../style/CreateTeacher.style.css"

type typeNewStudents = {
    name: string,
    classe: string
}[]


function CreateTeacher(): JSX.Element {
    const [inputFields, setInputFields] = useState<typeNewStudents>([
        { name: '', classe: '' }
    ])
    const [allStudents, setAllStudents] = useState<typeNewStudents>([])

    const handleSabmit = () => {
        setAllStudents(inputFields)
    }

    const addFields = () => {
        let newfield = { name: '', classe: '' }
        setInputFields([...inputFields, newfield])
    }

    const handleFormChange = (index: number, event: React.FormEvent<HTMLInputElement>) => {
        let data: any = [...inputFields];
        data[index][event.currentTarget.name] = event.currentTarget.value;
        setInputFields(data)
    }



    return (
        <div className="CreateTeacher">
            <div className="createTeacherHeader">
                <h1>Create new Teacher</h1>
            </div>
            <div className="createTeacherContent">
                <div className="createTeacherSub">
                    <div>
                        <h1>Teacher name</h1>
                        <input
                            type="text"
                            placeholder="teacher name" />
                    </div>
                    <div>
                        <h1>Subject</h1>
                        <input
                            type="text"
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
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                    <div className="mapsInputs">
                                        <h1>Class</h1>

                                        <input
                                            name='classe'
                                            placeholder='class'
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="createNewStudents">
                        <button onClick={addFields}>Add More..</button>
                    </div>
                </div>
            </div>
            <div className="AllcreateButton">
                <button onClick={handleSabmit}>creaste..</button>

            </div>
        </div>
    )

}

export default CreateTeacher