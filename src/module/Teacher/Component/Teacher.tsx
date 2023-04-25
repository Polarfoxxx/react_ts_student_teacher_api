import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import "../style/Teacher.style.css"

function Teacher(): JSX.Element {
    return (
        <div className="Teacher">
                <div className='teacherContext-link-container'>
                    <div className="teacherlink-block">
                        < Link className="Tlink " to="/Teacher/CreateTeacher">Create teacher</Link>
                        < Link className="Tlink " to="/Teacher/TeacherALL">Teacher</Link>
                        < Link className="Tlink " to="/Teacher/TeachersByID">Teachers by ID</Link>
                        < Link className="Tlink " to="/Teacher/UpdateTeacher">Update teacher</Link>
                        <Outlet />
                </div>
            </div>

        </div>
    )
}


export default Teacher

