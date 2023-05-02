import "../style/TeacherHome.style.css"
import { Link } from "react-router-dom"

function TeacherHome(): JSX.Element {

    return (
        <div className="teacherHome">
            <div className="techerContext">
                <h1>Here is the database of teachers.. In this site you can add, edit or just display the list of teachers...</h1>
            </div>
            <div className="teacherLinks">
                < Link className="Tlink " to="CreateTeacher">Create teacher</Link>
                < Link className="Tlink " to="TeacherALL">Teacher</Link>
                < Link className="Tlink " to="TeachersByID">Teachers by ID</Link>
                < Link className="Tlink " to="UpdateTeacher">Update teacher</Link>
            </div>
        </div>
    )
}

export default TeacherHome