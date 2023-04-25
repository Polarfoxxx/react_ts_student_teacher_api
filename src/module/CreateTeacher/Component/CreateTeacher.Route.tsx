import { useState } from "react"

type typeNewStudents = {
    name: string,
    classe: string
}[]


function CreateTeacher(): JSX.Element {
    const [inputFields, setInputFields] = useState<typeNewStudents>([
        { name: '', classe: '' }
    ])
    const [ allStudents, setAllStudents] = useState<typeNewStudents>([])

    const handleSabmit = () => {
        setAllStudents(inputFields)
    }

    const addFields = () => {
        let newfield = { name: '', classe: '' }
        setInputFields([...inputFields, newfield])
    }

    const handleFormChange = (index : number, event : React.FormEvent<HTMLInputElement>) => {
        let data : any = [...inputFields];
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
                    <form action="submit">
                        <div>
                            <input type="text" />
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="createStudentsSub">
                    <form>
                        <form>
                            {inputFields.map((input : any , index : number) => {
                                return (
                                    <div key={index}>
                                        <input
                                            name='name'
                                            placeholder='Name'
                                            onChange={event => handleFormChange(index, event )}
                                        />
                                        <input
                                            name='classe'
                                            placeholder='classe'
                                            onChange={event => handleFormChange(index, event )}
                                        />
                                    </div>
                                )
                            })}
                        </form>
                    </form>
                </div>
            </div>
            <button onClick={addFields}>Add More..</button>
            <button onClick={handleSabmit}>creaste..</button>
        </div>
    )

}

export default CreateTeacher