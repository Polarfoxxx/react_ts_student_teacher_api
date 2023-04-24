import { Link } from "react-router-dom"


function Students(): JSX.Element {
    return(
        <div className="Students">
            <div className="Context">
            <div className='toogle-link-container'>
                <div className="link-block">
                    < Link className="link " to="/Students/CreateStudents">CreateStudents</Link>
                    < Link className="link " to="/Students/StudentsALL">StudentsALL</Link>
                    < Link className="link " to="/Students/UpdateStudents">UpdateStudents</Link>
                </div>
            </div>
        </div>
        </div>
    )
}


 export default Students


 