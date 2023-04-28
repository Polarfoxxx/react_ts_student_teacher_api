import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import "../style/Teacher.style.css"

function Teacher(): JSX.Element {
    return (
        <div className="Teacher">
            <div className='teacherContext-link-container'>
                <div className="teacherlink-block">
                    < Link className="Tlink " to="CreateTeacher">Create teacher</Link>
                    < Link className="Tlink " to="TeacherALL">Teacher</Link>
                    < Link className="Tlink " to="TeachersByID">Teachers by ID</Link>
                    < Link className="Tlink " to="UpdateTeacher">Update teacher</Link>
                </div>
            </div>
        
            <div className="contentRoute">
                <Outlet />
               
            </div>
        </div>
    )
}


export default Teacher

