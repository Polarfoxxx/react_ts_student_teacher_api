import "../style/CreateStudents.style.css"

function CreateStudents(): JSX.Element {


    return (
        <div className="CreateStudents">
            <div className="CreateStudentsHeader">
                <h1>Create Students</h1>
            </div>
            <div className="CreateContent">
                <div className="searcheTeacherID">
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
                <div className="imges">
                    <img src="../../../../img/studedents.png" alt="" />
                </div>
            </div>
            <div className="buttonBlocj">
                <button>Create..</button>
            </div>
        </div>
    )
}

export default CreateStudents