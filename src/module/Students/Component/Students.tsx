import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import "../../Teacher/style/Teacher.style.css"

function Students(): JSX.Element {
    return (
        <div className="Teacher">
            <div className='teacherContext-link-container'>
                <div className="teacherlink-block">
                    < Link className="Tlink " to="/Students/CreateStudents">CreateStudents</Link>
                    < Link className="Tlink " to="/Students/StudentsALL">StudentsALL</Link>
                    < Link className="Tlink " to="/Students/UpdateStudents">UpdateStudents</Link>
                  
                </div>
            </div>
            <div className="contentRoute">
                <Outlet />
            </div>
        </div>
    )
}


export default Students


