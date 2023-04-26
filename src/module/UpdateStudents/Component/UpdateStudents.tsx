import "../style/UpdateStudents.style.css"

function UpdateStudents(): JSX.Element {
    return (
        <div className="CreateStudents">
            <div className="CreateStudents">
                <div className="CreateStudentsHeader">
                    <h1>Create Students</h1>
                </div>
                <div className="CreateContent">
                    <div className="searcheTeacherID">
                        <h1>Teacher ID</h1>
                        <input type="text" />
                    </div>
                    <div className="searcheStudentsID">
                        <h1>Teacher ID</h1>
                        <input type="text" />
                    </div>
                    <div className="createnewStudents">
                        <div className="inpNameStudent">
                            <h1>Name student</h1>
                            <input type="text" />
                        </div>
                        <div className="inpClassStudent">
                            <h1>Class</h1>
                            <input type="text" />
                        </div>
                    </div>

                </div>
                <div className="buttonBlocj">
                    <button>Create..</button>
                </div>
            </div>
        </div>
    )
}


export default UpdateStudents