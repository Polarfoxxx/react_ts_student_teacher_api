import "../style/TeacherHome.style.css"
import { Link } from "react-router-dom"

function StudentsHome(): JSX.Element {

    return (
        <div className="TeacherHome">
            <div className="techerContext">
                <h1>Here is the database of students.. In this site you can add, edit or just display the list of students...</h1>
            </div>
            <div className="teacherLinks">
                < Link className="Tlink " to="CreateStudents">Create students</Link>
                < Link className="Tlink " to="StudentsALL">Students</Link>
                < Link className="Tlink " to="UpdateStudents">Update students</Link>
            </div>
        </div>
    )
}

export default StudentsHome