import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"


function Students(): JSX.Element {
    return (
        <div className="Teacher">
            <div className='teacherContext-link-container'>
                <div className="teacherlink-block">
                    < Link className="Tlink " to="CreateStudents">Create students</Link>
                    < Link className="Tlink " to="StudentsALL">Students</Link>
                    < Link className="Tlink " to="UpdateStudents">Update students</Link>
                </div>
            </div>
            <div className="contentRoute">
                <Outlet />
            </div>
        </div>
    )
}


export default Students


