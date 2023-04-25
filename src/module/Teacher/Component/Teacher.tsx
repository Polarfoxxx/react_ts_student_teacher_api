import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import "../style/Teacher.style.css"

function Teacher(): JSX.Element {
    return (
        <div className="Teacher">
                <div className='teacherContext-link-container'>
                    <div className="teacherlink-block">
                        < Link className="Tlink " to="/Teacher/CreateTeacher">CreateTeacher</Link>
                        < Link className="Tlink " to="/Teacher/TeacherALL">TeacherALL</Link>
                        < Link className="Tlink " to="/Teacher/TeachersByID">TeachersByID</Link>
                        < Link className="Tlink " to="/Teacher/UpdateTeacher">UpdateTeacher</Link>
                        <Outlet />
                </div>
            </div>

        </div>
    )
}


export default Teacher

